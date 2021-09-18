import React, { useContext, useEffect } from "react";
import {
  Alert,
  ControlledInput,
  Icons,
  InputType,
  Mutations,
  Queries,
  Rules,
  useForm,
} from "@greeneggs/core";
import { ScrollView, StyleSheet, View, Alert as RNAlert } from "react-native";
import { deleteUser, LoginInput } from "@greeneggs/types/graphql";
import {
  Button,
  TopNavigation,
  TopNavigationAction,
  Text,
  Spinner,
} from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { useMutation, useQuery } from "@apollo/client";
import { Me } from "@greeneggs/types/graphql";
import LoadingScreen from "../loading/LoadingScreen";
import useLoginForm from "../auth/useLoginForm";
import { AuthContext } from "@greeneggs/core/auth-context/AuthContext";
import * as SecureStore from "expo-secure-store";

export const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  buttonGroup: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  heading: {
    paddingVertical: 16,
  },
  input: {
    marginBottom: 10,
  },
});

export default function DeleteAccount() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { loading, error, data } = useQuery<Me>(Queries.ME);
  const { formResult, handleSubmit, control, submitForm, register, setValue } =
    useLoginForm();
  const { setToken } = useContext(AuthContext);

  const [deleteAccount] = useMutation<deleteUser>(Mutations.DELETE_USER);

  useEffect(() => {
    register("email");
  }, [register, setValue]);

  if (loading) return <LoadingScreen />;
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }
  const me = data?.me.data;

  setValue("email", me?.email || "");

  async function onSubmit() {
    const result = await submitForm();
    const token = result.data?.login.data?.token;
    const error = result.data?.login.error;
    if (token && !error) {
      RNAlert.alert(
        "Delete your account",
        "This action is permanent",
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => navigation.goBack(),
          },
          {
            text: "OK",
            onPress: () => {
              SecureStore.deleteItemAsync("token").then(() => {
                deleteAccount().then(() => {
                  setToken && setToken(null);
                  navigation.navigate("Welcome");
                });
              });
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <>
      <TopNavigation
        style={{ backgroundColor: "transparent", paddingTop: insets.top }}
        accessoryLeft={() => (
          <TopNavigationAction
            icon={Icons.Back}
            onPress={() => navigation.goBack()}
          />
        )}
        alignment="center"
        title="Delete Account"
      />
      <ScrollView style={styles.view}>
        <Alert
          message={
            <Text>
              If you delete your account you will lose all
              <Text
                style={{ fontWeight: "bold" }}
              >{` ${me?.recipeCount}\u00a0recipes `}</Text>
              all other personal data. This action cannot be undone.
              {"\n"}
              {"\n"}
              Are you sure?
            </Text>
          }
          type="danger"
        />
        <ControlledInput<LoginInput>
          inputProps={{
            style: styles.input,
            label: "CONFIRM PASSWORD",
          }}
          controllerProps={{
            name: "password",
            defaultValue: "",
            control,
          }}
          submitError={formResult.data?.login.error}
          type={InputType.PASSWORD}
        />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Button
            accessoryLeft={Icons.Trash}
            status="danger"
            style={{ marginRight: 8 }}
            onPress={handleSubmit(onSubmit)}
          >
            DELETE MY ACCOUNT
          </Button>
          <Button status="control" onPress={() => navigation.goBack()}>
            CANCEL
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

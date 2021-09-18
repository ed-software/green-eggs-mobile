import React from "react";
import {
  ControlledInput,
  Icons,
  InputType,
  Mutations,
  Queries,
  Fragments,
  Rules,
  useForm,
} from "@greeneggs/core";
import { ScrollView, StyleSheet } from "react-native";
import {
  editProfile,
  editProfileVariables,
  ProfileDetails,
} from "@greeneggs/types/graphql";
import {
  Button,
  TopNavigation,
  TopNavigationAction,
  Text,
  Spinner,
} from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { useQuery } from "@apollo/client";
import { Me } from "@greeneggs/types/graphql";
import LoadingScreen from "../loading/LoadingScreen";

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

const useEditProfile = () =>
  useForm<ProfileDetails, editProfile, editProfileVariables>(
    Mutations.EDIT_PROFILE,
    "profileDetails"
  );

export default function EditProfile() {
  const form = useEditProfile();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { loading, error, data } = useQuery<Me>(Queries.ME);

  if (loading) return <LoadingScreen />;
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  function onSubmit() {
    form.submitForm().then(() => {
      navigation.goBack();
    });
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
        title="Edit Profile"
      />
      <ScrollView style={styles.view}>
        <ControlledInput<ProfileDetails>
          controllerProps={{
            name: "firstName",
            control: form.control,
            defaultValue: data?.me.data?.firstName,
          }}
          inputProps={{
            label: "FIRST NAME",
            style: {
              ...styles.input,
            },
          }}
          submitError={form.formResult.data?.editProfile.error}
          type={InputType.TEXT}
        />
        <ControlledInput<ProfileDetails>
          controllerProps={{
            name: "lastName",
            control: form.control,
            defaultValue: data?.me.data?.lastName,
          }}
          inputProps={{
            label: "LAST NAME",
            style: {
              ...styles.input,
            },
          }}
          submitError={form.formResult.data?.editProfile.error}
          type={InputType.TEXT}
        />
        <ControlledInput<ProfileDetails>
          controllerProps={{
            name: "bio",
            control: form.control,
            defaultValue: data?.me.data?.bio ?? "",
          }}
          inputProps={{
            label: "BIO",
            style: {
              ...styles.input,
            },
          }}
          submitError={form.formResult.data?.editProfile.error}
          type={InputType.TEXTAREA}
        />
        <Button
          accessoryRight={
            form.formResult.loading
              ? () => <Spinner size="small" status="control" />
              : Icons.Save
          }
          onPress={form.handleSubmit(onSubmit)}
        >
          SAVE CHANGES
        </Button>
      </ScrollView>
    </>
  );
}

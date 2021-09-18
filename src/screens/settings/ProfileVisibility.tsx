import React from "react";
import {
  Button,
  Spinner,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ScrollView, StyleSheet } from "react-native";
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
import { useNavigation } from "@react-navigation/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Me,
  Privacy,
  ProfileVisibilityDetails,
  UpdateProfileVisibility,
  UpdateProfileVisibilityVariables,
  UpdateProfileVisibility_updateProfileVisibility,
} from "@greeneggs/types/graphql";
import { useQuery } from "@apollo/client";
import { LoadingScreen } from "..";
import { FullUserFragment } from "@greeneggs/graphql/fragments";

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

const ProfileVisibility = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const { loading, error, data } = useQuery<Me>(Queries.ME);
  const form = useForm<
    ProfileVisibilityDetails,
    UpdateProfileVisibility,
    UpdateProfileVisibilityVariables
  >(Mutations.UPDATE_PROFILE_VISIBILITY, "profileVisibilityDetails");

  if (loading) return <LoadingScreen />;
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }
  const me = data?.me.data;

  function handleSubmit() {
    form
      .submitForm({
        update: (cache) => {
          if (me?.id) {
            cache.writeFragment({
              id: `FullUser:${me.id}`,
              data: {
                ...me,
                visibility: form.getValues("visibility"),
              },
              fragment: FullUserFragment,
              fragmentName: "FullUserFragment",
            });
          }
        },
      })
      .then(() => navigation.goBack())
      .catch((error) => console.error(error));
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
        title="Profile Visibility"
      />
      <ScrollView style={styles.view}>
        <Alert
          message={
            <Text>
              Here you can control which users are able to follow you.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>Public</Text> means anyone
              can follow you.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>Friends only</Text> means you
              have to approve follow requests.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>Private</Text> means nobody
              can follow you. Your profile is hidden and you won't appear in any
              searches.{"\n\n"}
            </Text>
          }
          type="info"
        />
        <ControlledInput<ProfileVisibilityDetails>
          controllerProps={{
            name: "visibility",
            control: form.control,
            rules: {
              ...Rules.REQUIRED,
            },
          }}
          submitError={form.formResult.data?.updateProfileVisibility.error}
          type={InputType.PRIVACY}
        />
        <Button
          onPress={handleSubmit}
          accessoryRight={
            form.formResult.loading
              ? () => <Spinner size="small" status="control" />
              : Icons.Save
          }
        >
          SAVE CHANGES
        </Button>
      </ScrollView>
    </>
  );
};

export default ProfileVisibility;

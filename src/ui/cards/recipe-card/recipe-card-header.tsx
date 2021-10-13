import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Avatar, Text } from "@ui-kitten/components";
import { recipes_recipes_data_submittedBy } from "@greeneggs/types/graphql";
import { noAvatar } from "@greeneggs/assets";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftElements: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightElements: {
    flexDirection: "row",
  },
  avatar: {
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  ellipsisIcon: {
    width: 24,
    height: 24,
  },
});

export interface IRecipeCardHeaderProps
  extends Partial<recipes_recipes_data_submittedBy> {
  avatarURI?: string | null;
  firstName: string;
  lastName: string;
  id: string;
}

export const RecipeCardHeader = ({
  avatarURI,
  firstName,
  lastName,
  id,
}: IRecipeCardHeaderProps) => {
  const navigation: StackNavigationProp<any, any> = useNavigation();
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.leftElements}
        onPress={() => navigation.push("Profile", { userId: id })}
      >
        <Avatar
          size="small"
          source={avatarURI ? { uri: avatarURI } : noAvatar}
          style={styles.avatar}
        />
        <Text style={styles.username}>{`${firstName} ${lastName}`}</Text>
      </Pressable>
    </View>
  );
};
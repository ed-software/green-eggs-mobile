import React, { FC } from "react";
import RecipeCardSmall from "@greeneggs/core/recipe-card-small";
import { useQuery } from "@apollo/client";
import { Queries, Alert } from "@greeneggs/core";
import LoadingScreen from "../loading/LoadingScreen";
import { Text, TopNavigation } from "@ui-kitten/components";
import { savedRecipes, savedRecipesVariables } from "@greeneggs/types/graphql";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

const SavedRecipesHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <TopNavigation
      style={{ backgroundColor: "transparent", paddingTop: insets.top }}
      alignment="center"
      title="Saved Recipes"
    />
  );
};

const SavedRecipes: FC = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery<
    savedRecipes,
    savedRecipesVariables
  >(Queries.GET_SAVED_RECIPES, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }
  const recipes = data?.savedRecipes.data;
  if (recipes === undefined || recipes === null) {
    return <Text>Error! Recipe not found</Text>;
  }
  if (recipes.length === 0) {
    return (
      <>
        <SavedRecipesHeader />
        <Alert
          style={{ padding: 16 }}
          message="You haven't saved any recipes yet! Save some recipes and they will appear here."
          type="info"
        />
      </>
    );
  }
  return (
    <>
      <SavedRecipesHeader />
      <View style={{ padding: 16 }}>
        {recipes.map((recipe) => (
          <View style={{ marginBottom: 16 }}>
            <RecipeCardSmall
              recipe={recipe}
              onPress={() =>
                navigation.navigate("Recipe", {
                  recipeId: recipe.id,
                })
              }
            />
          </View>
        ))}
      </View>
    </>
  );
};

export default SavedRecipes;
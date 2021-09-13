import * as React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { useQuery } from "@apollo/client";
import { Trending as TrendingType, TrendingVariables } from "@greeneggs/types/graphql";
import { Queries, Alert } from "@greeneggs/core";

import LoadingScreen from "../../loading/LoadingScreen";
import RecipeCard from "../recipe-card/RecipeCard";

const CardVerticalMargin = 20;
const CardHorizontalMargin = 24;

const styles = StyleSheet.create({
  firstCard: {
    marginTop: CardVerticalMargin,
  },
  card: {
    marginBottom: CardVerticalMargin,
    marginHorizontal: CardHorizontalMargin,
  },
});

export default function Trending({ navigation }: any) {
  const { loading, error, data, refetch } = useQuery<TrendingType, TrendingVariables>(
    Queries.TRENDING, {
      variables: {
        offset: 0,
        limit: 10,
      }
    }
  );

  if (loading) return <LoadingScreen />;
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
    >
      {
        (data?.trending?.data && data?.trending?.data.length > 0) ? (
          data?.trending.data?.map((recipe, i: number) => (
            <View
              key={recipe?.id}
              style={
                i === 0 ? { ...styles.firstCard, ...styles.card } : styles.card
              }
            >
              <RecipeCard
                recipe={recipe!}
                onPress={() =>
                  navigation.navigate("Recipe", { recipeId: recipe?.id })
                }
              />
            </View>
          ))
        ) : (
          <Alert type="info" message="Nothing found!" />
        )
      }
    </ScrollView>
  );
}

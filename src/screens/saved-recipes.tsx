/**
 * Author: Edward Jones
 */
import React from 'react'
import { Queries } from '@greeneggs/graphql'
import {
  RecipeFilter,
  savedRecipesVariables,
  savedRecipes_savedRecipes_data,
  Sort,
  savedRecipes as SavedRecipesType,
} from '@greeneggs/types/graphql'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { TopNavigation, Background, LazyList, RecipeCardSmall } from '@greeneggs/ui'
import { LoggedInNavigationProp } from '@greeneggs/navigation/routes/logged-in-routes'

function SavedRecipesHeader() {
  return <TopNavigation title='Saved Recipes' accessoryLeft={undefined} />
}

/**
 * View for displaying recipes a user has saved.
 */
export function SavedRecipes() {
  const navigation = useNavigation<LoggedInNavigationProp>()

  return (
    <Background>
      <SavedRecipesHeader />
      <LazyList<SavedRecipesType, savedRecipesVariables, savedRecipes_savedRecipes_data, Sort, RecipeFilter>
        query={Queries.getSavedRecipes}
        variables={{}}
        dataKey='savedRecipes'
        emptyMessage="You haven't saved any recipes yet! Save some recipes and they will appear here."
        renderItem={({ item: recipe }) => (
          <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
            <RecipeCardSmall
              recipe={recipe}
              onPress={() =>
                navigation.navigate('Recipe', {
                  recipeId: recipe.id,
                })
              }
            />
          </View>
        )}
      />
    </Background>
  )
}

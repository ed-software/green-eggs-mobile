/**
 * Author: Dimitri Zvolinski
 */
import React, { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider, List } from '@ui-kitten/components'
import { TopNavigation, Background, IngredientListItem } from '@greeneggs/ui'
import { RouteProp, useRoute } from '@react-navigation/native'
import { LoggedInRouteParams } from '@greeneggs/navigation/routes/logged-in-routes'

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
})

/**
 * Screen that displays a list of all ingredients for a recipe.
 */
export function RecipeAllIngredients(): ReactElement {
  const route = useRoute<RouteProp<LoggedInRouteParams, 'RecipeAllIngredients'>>()
  const { ingredients, multiplier } = route.params

  return (
    <Background>
      <TopNavigation title='All Ingredients' />
      <View style={{ ...styles.content, marginHorizontal: -16 }}>
        <List
          data={ingredients}
          renderItem={({ item }) => (
            <IngredientListItem
              ingredient={{
                ...item,
                quantity: item.quantity ? item.quantity * multiplier : null,
              }}
            />
          )}
        />
        <Divider />
      </View>
    </Background>
  )
}

/**
 * Author: Edward Jones
 */
import { ReactElement } from 'react';
import { View } from 'react-native'
import {
  RecipeFilter,
  Sort,
  Trending as TrendingType,
  TrendingVariables,
  Trending_trending_data,
} from '@greeneggs/types/graphql'
import { Queries } from '@greeneggs/graphql'
import { useNavigation } from '@react-navigation/core'
import { LoggedInNavigationProp } from '@greeneggs/navigation/types'
import { Background } from '@greeneggs/ui/background'
import { LazyList } from '@greeneggs/ui/lazy-list'
import { RecipeCard } from '@greeneggs/ui/cards'

const cardVerticalMargin = 20
const cardHorizontalMargin = 24

/**
 * Screen that shows a list of the most popular new recipes within the app.
 */
export function Trending(): ReactElement {
  const navigation = useNavigation<LoggedInNavigationProp>()
  return (
    <Background>
      <LazyList<TrendingType, TrendingVariables, Trending_trending_data, Sort, RecipeFilter>
        limit={4}
        query={Queries.getTrending}
        variables={{}}
        dataKey='trending'
        emptyMessage='There are no trending recipes! This means nobody has uploaded a recipe for a while.'
        renderItem={({ item: recipe, index }) => (
          <View
            key={recipe?.id}
            style={
              index === 0
                ? {
                    marginTop: cardVerticalMargin,
                    marginBottom: cardVerticalMargin,
                    marginHorizontal: cardHorizontalMargin,
                  }
                : { marginBottom: cardVerticalMargin, marginHorizontal: cardHorizontalMargin }
            }
          >
            <RecipeCard recipe={recipe} onPress={() => navigation.navigate('Recipe', { recipeId: recipe?.id })} />
          </View>
        )}
      />
    </Background>
  )
}

/**
 * Author: Edward Jones
 */
import { ReactElement } from 'react';
import { View } from 'react-native'
import {
  NewsFeed as NewsFeedType,
  NewsFeedVariables,
  NewsFeed_newsFeed_data,
  RecipeFilter,
  Sort,
} from '@greeneggs/types/graphql'
import { Queries } from '@greeneggs/graphql'
import { useNavigation } from '@react-navigation/native'
import { LoggedInNavigationProp } from '@greeneggs/navigation/types'
import { Background } from '@greeneggs/ui/background'
import { LazyList } from '@greeneggs/ui/lazy-list'
import { RecipeCard } from '@greeneggs/ui/cards'

const cardVerticalMargin = 20
const cardHorizontalMargin = 24

/**
 * Screen that shows an infinite scrolling list of recipes from users that the logged in user follows.
 */
export function NewsFeed(): ReactElement {
  const navigation = useNavigation<LoggedInNavigationProp>()
  return (
    <Background>
      <LazyList<NewsFeedType, NewsFeedVariables, NewsFeed_newsFeed_data, Sort, RecipeFilter>
        limit={4}
        query={Queries.getNewsFeed}
        variables={{}}
        dataKey='newsFeed'
        emptyMessage='Try following some users to see their latest recipes.'
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

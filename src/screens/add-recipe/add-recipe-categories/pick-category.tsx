/**
 * Author: Edward Jones
 */
import { useContext, useState } from 'react';
import {
  Categories,
  CategoriesVariables,
  Categories_categories_data,
  CategoryInput,
  RecipeFilter,
  Sort,
} from '@greeneggs/types/graphql'
import { Button, Divider, ListItem } from '@ui-kitten/components'
import { Queries } from '@greeneggs/graphql'
import { useNavigation } from '@react-navigation/core'
import { toTitleCase } from '@greeneggs/utils'
import { AddRecipeContext } from '@greeneggs/context'
import { Background } from '@greeneggs/ui/background'
import { TopNavigation } from '@greeneggs/ui/top-navigation'
import { Input } from '@greeneggs/ui/input'
import { LazyListAlpha } from '@greeneggs/ui/lazy-alpha-list'
import * as Icons from '@greeneggs/ui/icons'
import { AlphabetType } from '@greeneggs/ui/alpha-list'

/**
 * Screen with an infinite scrolling alphabetised list of categories that
 * can be selected and added to a new recipe.
 */
export function PickCategory() {
  const [query, setQuery] = useState('')
  const { categoriesFieldArray } = useContext(AddRecipeContext)
  const navigation = useNavigation()

  function pick(category: CategoryInput) {
    categoriesFieldArray?.append(category)
    navigation.goBack()
  }

  return (
    <Background>
      <TopNavigation title='Choose a category' />
      <Input
        style={{ padding: 16 }}
        placeholder='Search categories...'
        accessoryLeft={Icons.Search}
        onChangeText={setQuery}
        value={query}
        autoFocus
      />
      <LazyListAlpha<Categories, CategoriesVariables, Categories_categories_data, Sort, RecipeFilter>
        renderItem={(item) => (
          <>
            <ListItem
              title={item.name}
              onPress={() => {
                pick({ name: item.name })
              }}
            />
            <Divider />
          </>
        )}
        categoriseItem={(item) => item.name[0].toLowerCase() as AlphabetType}
        query={Queries.getCategories}
        ListFooterComponent={
          query.length > 0 ? (
            <Button style={{ marginHorizontal: 16, marginTop: 16 }} onPress={() => pick({ name: toTitleCase(query) })}>
              {`CREATE "${query.toUpperCase()}"`}
            </Button>
          ) : undefined
        }
        variables={{
          query,
        }}
        dataKey='categories'
      />
    </Background>
  )
}

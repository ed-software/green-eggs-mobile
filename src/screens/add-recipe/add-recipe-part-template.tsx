/**
 * Author: Edward Jones
 */
import { ReactElement, ReactNode } from 'react';

import * as React from 'react';
import { Button, List, Text, TextElement } from '@ui-kitten/components'
import { ListRenderItem, View } from 'react-native'
import { EmptyState } from '@greeneggs/ui/empty-state'
import { addRecipeStyles } from './add-recipe-styles'
import { Background } from '@greeneggs/ui/background'
import * as Icons from '@greeneggs/ui/icons'

interface AddRecipePartTemplateProps<T> {
  title: React.ReactText | TextElement
  createButtonTitle: React.ReactText | TextElement
  onPressCreate: () => void
  emptyStateTitle: React.ReactText | TextElement
  emptyStateDescription: React.ReactText | TextElement
  header?: ReactNode
  listItem: ListRenderItem<T> | null | undefined
  data: readonly T[] | null | undefined
}
/**
 * Template for screens that create larger sections of the recipe, i.e. all ingredients.
 */
export function AddRecipePartTemplate<T>({
  title,
  createButtonTitle,
  onPressCreate,
  emptyStateTitle,
  emptyStateDescription,
  header,
  listItem,
  data,
}: AddRecipePartTemplateProps<T>): ReactElement {
  return (
    <Background>
      <List
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                ...addRecipeStyles.heading,
                ...addRecipeStyles.view,
              }}
            >
              <Text category='h5'>{title}</Text>
              <View style={{ flexDirection: 'column' }}>
                <Button
                  size='small'
                  status='basic'
                  accessoryLeft={Icons.Add}
                  style={{ flexShrink: 1 }}
                  onPress={onPressCreate}
                >
                  {createButtonTitle}
                </Button>
              </View>
            </View>
            {header}
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          <View style={{ flexGrow: 1, justifyContent: 'center' }}>
            <EmptyState title={emptyStateTitle} description={emptyStateDescription} />
          </View>
        }
        data={data}
        renderItem={listItem}
      />
    </Background>
  )
}

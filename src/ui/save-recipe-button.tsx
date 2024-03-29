/**
 * Author: Edward Jones
 */
import { useState } from 'react'
import { Icon, TopNavigationAction } from '@ui-kitten/components'
import { useMutation } from '@apollo/client'
import { Mutations, Queries } from '@greeneggs/graphql'

interface SaveRecipeButtonProps {
  recipeId: string | null
  saved: boolean
}

/**
 * Icon button that when pressed triggers the recipe to be saved. Uses local state to improve responsiveness.
 */
export function SaveRecipeButton({ recipeId, saved }: SaveRecipeButtonProps) {
  const [isOptimisticSaved, setIsOptimisticSaved] = useState(saved)

  const [saveRecipe] = useMutation(Mutations.saveRecipe, {
    variables: { recipeId },
    refetchQueries: [Queries.getRecipe, 'recipe', Queries.getSavedRecipes],
  })

  const [unsaveRecipe] = useMutation(Mutations.unsaveRecipe, {
    variables: { recipeId },
    refetchQueries: [Queries.getRecipe, 'recipe', Queries.getSavedRecipes],
  })

  function handleSaveRecipe() {
    setIsOptimisticSaved(true)
    saveRecipe().catch(() => setIsOptimisticSaved(false))
  }

  function handleUnsaveRecipe() {
    setIsOptimisticSaved(false)
    unsaveRecipe().catch(() => setIsOptimisticSaved(true))
  }

  return (
    <TopNavigationAction
      icon={(iconProps) =>
        isOptimisticSaved ? <Icon {...iconProps} name='bookmark' /> : <Icon {...iconProps} name='bookmark-outline' />
      }
      onPress={() => (isOptimisticSaved ? handleUnsaveRecipe() : handleSaveRecipe())}
    />
  )
}

/**
 * Author: Edward Jones
 */
import { ReactElement, useContext, useEffect } from 'react'
import { ListItem } from '@ui-kitten/components'
import { Image } from 'react-native'
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'
import * as Icons from '@greeneggs/ui/icons'

import { RecipeForm } from '../add-recipe'
import { AddRecipePartTemplate } from '../add-recipe-part-template'
import { useNavigation } from '@react-navigation/core'
import { LoggedInNavigationProp } from '@greeneggs/navigation/types'
import { AddRecipeContext } from '@greeneggs/context'

interface Props {
  form: RecipeForm
}

/**
 * Screen that displays a list of all steps that will be added to a recipe.
 */
export function AddRecipeDirections({ form }: Props): ReactElement {
  const { stepsFieldArray } = useContext(AddRecipeContext)
  const navigation = useNavigation<LoggedInNavigationProp>()

  const directionsLength = stepsFieldArray?.fields?.length || 0
  useEffect(() => {
    if (directionsLength > 0) {
      form.clearErrors('steps')
    }
  }, [directionsLength])

  return (
    <AddRecipePartTemplate
      title='Steps'
      createButtonTitle='ADD STEP'
      onPressCreate={() => navigation.navigate('CreateStep')}
      emptyStateTitle='No steps'
      emptyStateDescription='Include any steps that must be completed in order to follow this recipe.'
      listItem={({ item, index }) =>
        item ? (
          <ListItem
            title={`Step ${index + 1}`}
            description={item.description}
            accessoryRight={(props) => (
              <>
                <Image
                  source={{
                    uri: (item.image as ImageInfo).uri,
                  }}
                  style={{ width: 48, height: 48 }}
                />
                <Icons.Cross {...props} onPress={() => stepsFieldArray?.remove(index)} />
              </>
            )}
          />
        ) : null
      }
      data={stepsFieldArray?.fields}
    />
  )
}

/**
 * Author: Edward Jones
 */
import { TopNavigation as UIKittenTopNavigation, TopNavigationAction, TopNavigationProps } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/core'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as Icons from './icons'

interface Props extends TopNavigationProps {
  onGoBack?: () => void
}

/**
 * Wrapper for UI Kitten Top Navigation component that provides opinionated styles for the Green Eggs app.
 */
export function TopNavigation({ style, onGoBack, ...props }: Props) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <UIKittenTopNavigation
      alignment='center'
      accessoryLeft={() => <TopNavigationAction icon={Icons.Back} onPress={onGoBack ? onGoBack : navigation.goBack} />}
      {...props}
      style={[{ backgroundColor: 'transparent', marginTop: insets.top }, style]}
    />
  )
}

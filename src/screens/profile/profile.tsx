/**
 * Author: Andrew Wilkie
 */
import { LoggedInRouteParams } from '@greeneggs/navigation/types'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ReactElement } from 'react';
import { GenericProfile } from './generic-profile'

/**
 * Screen for displaying the profile details for a user (not the currently logged in user).
 */
export function Profile(): ReactElement {
  const route = useRoute<RouteProp<LoggedInRouteParams, 'Profile'>>()
  const { userId } = route.params

  return <GenericProfile userId={userId} />
}

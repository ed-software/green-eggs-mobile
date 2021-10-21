/**
 * Author: Edward Jones
 */
import React from 'react';
import { Avatar, ListItem } from '@ui-kitten/components';
import { Users_users_data } from '@greeneggs/types/graphql';
import { Icons } from '@greeneggs/ui';
import { noAvatar } from '@greeneggs/assets';
import { useNavigateToProfile } from '@greeneggs/navigation';

interface UserListItemProps {
  user: Users_users_data
}

export const UserListItem = ({ user }: UserListItemProps) => {
  const navigateToProfile = useNavigateToProfile();
  return (
    <ListItem
      title={`${user.firstName} ${user.lastName}`}
      accessoryLeft={() => (
        <Avatar
          style={{ width: 32, height: 32, marginHorizontal: 8 }}
          source={user.avatarURI ? { uri: user.avatarURI } : noAvatar}
        />
      )}
      accessoryRight={Icons.Forward}
      onPress={() => navigateToProfile(user.id)}
    />
  )
}

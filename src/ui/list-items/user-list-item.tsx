import React from 'react';
import { Avatar, ListItem } from '@ui-kitten/components';
import { Users_users_data } from '@greeneggs/types/graphql';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icons } from '@greeneggs/ui';
import { noAvatar } from '@greeneggs/assets';

interface UserListItemProps {
  user: Users_users_data
}

export const UserListItem = ({ user }: UserListItemProps) => {
  const navigation: StackNavigationProp<any, any> = useNavigation();
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
      onPress={() => navigation.push("Profile", { userId: user.id })}
    />
  )
}

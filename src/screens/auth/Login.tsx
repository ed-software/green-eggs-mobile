import React from 'react';
import { View } from 'react-native';
import {
  Text, Button, TopNavigation, TopNavigationAction, Input,
} from '@ui-kitten/components';
import { Icons } from '@greeneggs/core';

import useLoginForm from './useLoginForm';

const Login = ({ navigation }: any) => {
  const [loginForm, setLoginForm, submitLoginForm] = useLoginForm();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TopNavigation
        accessoryLeft={() => <TopNavigationAction icon={Icons.Back} onPress={navigateBack}/>}
        title="Green Eggs"
      />
      <Text category="s1">A friendly recipe sharing experience</Text>
      <Input
        label="Email"
        value={loginForm.email}
        onChangeText={(nextValue) => setLoginForm('email', nextValue)}
      />
      <Input
        label="Password"
        value={loginForm.password}
        onChangeText={(nextValue) => setLoginForm('password', nextValue)}
      />
      <Button onPress={submitLoginForm}>LOGIN</Button>
      <Text>OR</Text>
      <Button>CREATE NEW ACCOUNT</Button>
    </View>
  );
};

export default Login;

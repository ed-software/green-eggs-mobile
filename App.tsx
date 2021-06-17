import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './src/core/use-cached-resources/useCachedResources';
import Welcome from './src/screens/auth/Welcome';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import Home from './src/screens/home/Home';
import Theme from './src/theme/theme.json';
import Mapping from './src/theme/mapping.json';

const client = new ApolloClient({
  uri: process.env.API_URI,
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <ApolloProvider client={client}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...Theme }}
        customMapping={Mapping}
      >
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator headerMode='none'>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </ApolloProvider>
  );
}

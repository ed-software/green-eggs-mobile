import React, { Dispatch, SetStateAction, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SecureStore from "expo-secure-store";

import useCachedResources from "./src/core/use-cached-resources/useCachedResources";
import Welcome from "./src/screens/auth/Welcome"; // CHANGED FOR TESTING PROFILE
import Login from "./src/screens/auth/Login";
import Signup from "./src/screens/auth/Signup";
import Home from "./src/screens/home/Home";
import Theme from "./src/theme/theme.json";
import Mapping from "./src/theme/mapping.json";
import Recipe from "@greeneggs/screens/recipe/Recipe";
import RecipeDescription from "@greeneggs/screens/recipe/RecipeDescription";
import { Navigation } from "@greeneggs/core";
import { useContext } from "react";
import { createUploadLink } from "apollo-upload-client";
import { AuthContext, Token } from "@greeneggs/core/auth-context/AuthContext";
import CreateIngredient from "@greeneggs/screens/add-recipe/add-recipe-ingredients/CreateIngredient";
import EditProfile from "@greeneggs/screens/settings/EditProfile";
import EditProfilePicture from "@greeneggs/screens/settings/EditProfilePicture";
import ChangePassword from "@greeneggs/screens/settings/ChangePassword";
import ConnectAccounts from "@greeneggs/screens/settings/ConnectAccounts";
import SignOut from "@greeneggs/screens/settings/SignOut";
import DeleteAccount from "@greeneggs/screens/settings/DeleteAccount";
import DietaryPreferences from "@greeneggs/screens/settings/DietaryPreferences";
import AllergyPreferences from "@greeneggs/screens/settings/AllergyPreferences";
import ProfileVisibility from "@greeneggs/screens/settings/ProfileVisibility";
import Settings from "@greeneggs/screens/settings/Settings";
import CreateStep from "@greeneggs/screens/add-recipe/add-recipe-directions/CreateStep";
import CreateAllergy from "@greeneggs/screens/add-recipe/add-recipe-allergies/CreateAllergy";
import CreateCategory from "@greeneggs/screens/add-recipe/add-recipe-categories/CreateCategory";
import CreateDiet from "@greeneggs/screens/add-recipe/add-recipe-diets/CreateDiet";
import RecipeAllComments from "@greeneggs/screens/recipe/RecipeAllComments";
import RecipeCommentReplies from "@greeneggs/screens/recipe/RecipeCommentReplies";
import RecipeAllIngredients from "@greeneggs/screens/recipe/RecipeAllIngredients";

const Stack = createStackNavigator();

const AuthProvider = () => {
  // TODO check that token is valid

  const [token, setToken] = useState<Token>();
  SecureStore.getItemAsync("token").then((resolvedToken) =>
    setToken(resolvedToken)
  );

  return (
    <AuthContext.Provider value={{ token: token, setToken: setToken }}>
      <App />
    </AuthContext.Provider>
  );
};

export default AuthProvider;

function App() {
  const isLoadingComplete = useCachedResources();
  const { token } = useContext(AuthContext);

  const authLink = setContext((_request, _previousContext) => ({
    headers: {
      authorization: token,
    },
  }));

  // Log any GraphQL errors or network error that occurred
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const uploadLink = errorLink.concat(
    createUploadLink({
      uri: process.env.API_URI,
    })
  );

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: token
      ? authLink.concat(uploadLink as unknown as ApolloLink)
      : (uploadLink as unknown as ApolloLink),
  });

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <ApolloProvider client={client}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...Theme }}
        customMapping={Mapping}
      >
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {!Boolean(token) ? (
              <>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={Navigation} />
                <Stack.Screen name="Recipe" component={Recipe} />
                <Stack.Screen
                  name="RecipeDescription"
                  component={RecipeDescription}
                />
                <Stack.Screen
                  name="CreateIngredient"
                  component={CreateIngredient}
                />
                <Stack.Screen name="CreateStep" component={CreateStep} />
                <Stack.Screen
                  name="CreateCategory"
                  component={CreateCategory}
                />
                <Stack.Screen name="CreateDiet" component={CreateDiet} />
                <Stack.Screen name="CreateAllergy" component={CreateAllergy} />

                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen
                  name="EditProfilePicture"
                  component={EditProfilePicture}
                />
                <Stack.Screen
                  name="ChangePassword"
                  component={ChangePassword}
                />
                <Stack.Screen
                  name="ConnectAccounts"
                  component={ConnectAccounts}
                />
                <Stack.Screen name="SignOut" component={SignOut} />
                <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
                <Stack.Screen name="Diets" component={DietaryPreferences} />
                <Stack.Screen name="Allergies" component={AllergyPreferences} />
                <Stack.Screen
                  name="ProfileVisibility"
                  component={ProfileVisibility}
                />
                <Stack.Screen
                  name="RecipeAllComments"
                  component={RecipeAllComments}
                />
                <Stack.Screen
                  name="RecipeCommentReplies"
                  component={RecipeCommentReplies}
                />
                <Stack.Screen
                  name="RecipeAllIngredients"
                  component={RecipeAllIngredients}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </ApolloProvider>
  );
}

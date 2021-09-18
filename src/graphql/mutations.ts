import { gql } from '@apollo/client';
import * as Fragments from './fragments';

// eslint-disable-next-line import/prefer-default-export
export const ADD_RECIPE = gql`
  mutation addRecipe($recipe: RecipeInput!) {
    addRecipe(recipe: $recipe) {
      data {
        ...RecipeFragment
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.RecipeFragment}
  ${Fragments.ErrorFragment}
`;

export const LOGIN = gql`
  mutation login($loginDetails: LoginInput!) {
    login(loginDetails: $loginDetails) {
      data {
        token
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
`;

export const SIGNUP = gql`
  mutation signup($signupDetails: SignupInput!) {
    signup(signupDetails: $signupDetails) {
      data {
        token
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
`;

export const EDIT_PROFILE = gql`
  mutation editProfile($profileDetails: ProfileDetails!) {
    editProfile(profileDetails: $profileDetails) {
      data {
        ...FullUserFragment
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
  ${Fragments.FullUserFragment}
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($changePasswordDetails: ChangePasswordDetails!) {
    changePassword(changePasswordDetails: $changePasswordDetails) {
      error {
        message
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteAccount {
      error {
        message
      }
    }
  }
`;
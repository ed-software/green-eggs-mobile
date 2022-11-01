/**
 * Author: Edward Jones
 */
import { IForm, useForm } from '@greeneggs/ui'
import { Mutations } from '@greeneggs/graphql'
import { signup, signupVariables, SignupInput } from '@greeneggs/types/graphql'
/**
 * Hook that sets up a sign up form with our custom useForm hook
 */
export const useSignupForm = (): IForm<SignupInput, signup, signupVariables> =>
  useForm<SignupInput, signup, signupVariables>(Mutations.signup, 'signupDetails')

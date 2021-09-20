/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addRecipe
// ====================================================

export interface addRecipe_addRecipe_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface addRecipe_addRecipe_data_categories {
  __typename: "Category";
  name: string;
}

export interface addRecipe_addRecipe_data_diets {
  __typename: "Diet";
  name: string;
}

export interface addRecipe_addRecipe_data_allergies {
  __typename: "Allergy";
  name: string;
}

export interface addRecipe_addRecipe_data_ingredients {
  __typename: "Ingredient";
  name: string;
  description: string | null;
  quantity: number;
  unit: string | null;
}

export interface addRecipe_addRecipe_data_steps {
  __typename: "RecipeStep";
  title: string;
  description: string;
  image: string;
}

export interface addRecipe_addRecipe_data_comments_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface addRecipe_addRecipe_data_comments_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface addRecipe_addRecipe_data_comments_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: addRecipe_addRecipe_data_comments_replies_submittedBy;
}

export interface addRecipe_addRecipe_data_comments {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: addRecipe_addRecipe_data_comments_submittedBy;
  replies: addRecipe_addRecipe_data_comments_replies[];
}

export interface addRecipe_addRecipe_data {
  __typename: "Recipe";
  id: string;
  subtitle: string;
  title: string;
  description: string;
  submittedBy: addRecipe_addRecipe_data_submittedBy;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: string;
  liked: boolean;
  categories: addRecipe_addRecipe_data_categories[];
  diets: addRecipe_addRecipe_data_diets[];
  allergies: addRecipe_addRecipe_data_allergies[];
  ingredients: addRecipe_addRecipe_data_ingredients[];
  steps: addRecipe_addRecipe_data_steps[];
  comments: addRecipe_addRecipe_data_comments[];
}

export interface addRecipe_addRecipe_error {
  __typename: "Error";
  message: string;
}

export interface addRecipe_addRecipe {
  __typename: "RecipeResult";
  data: addRecipe_addRecipe_data | null;
  error: addRecipe_addRecipe_error | null;
}

export interface addRecipe {
  addRecipe: addRecipe_addRecipe;
}

export interface addRecipeVariables {
  recipe: RecipeInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_data {
  __typename: "AuthResultData";
  token: string;
}

export interface login_login_error {
  __typename: "Error";
  message: string;
}

export interface login_login {
  __typename: "AuthResult";
  data: login_login_data | null;
  error: login_login_error | null;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  loginDetails: LoginInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup_data {
  __typename: "AuthResultData";
  token: string;
}

export interface signup_signup_error {
  __typename: "Error";
  message: string;
}

export interface signup_signup {
  __typename: "AuthResult";
  data: signup_signup_data | null;
  error: signup_signup_error | null;
}

export interface signup {
  signup: signup_signup;
}

export interface signupVariables {
  signupDetails: SignupInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editProfile
// ====================================================

export interface editProfile_editProfile_data_dietaryPreferences {
  __typename: "Diet";
  id: string;
  name: string;
}

export interface editProfile_editProfile_data_allergyPreferences {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface editProfile_editProfile_data {
  __typename: "FullUser";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
  likeCount: number;
  followerCount: number;
  followingCount: number;
  recipeCount: number;
  isFollowing: boolean | null;
  dietaryPreferences: editProfile_editProfile_data_dietaryPreferences[];
  allergyPreferences: editProfile_editProfile_data_allergyPreferences[];
  visibility: Privacy;
}

export interface editProfile_editProfile_error {
  __typename: "Error";
  message: string;
}

export interface editProfile_editProfile {
  __typename: "EditProfileResult";
  data: editProfile_editProfile_data | null;
  error: editProfile_editProfile_error | null;
}

export interface editProfile {
  editProfile: editProfile_editProfile;
}

export interface editProfileVariables {
  profileDetails: ProfileDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: changePassword
// ====================================================

export interface changePassword_changePassword_error {
  __typename: "Error";
  message: string;
}

export interface changePassword_changePassword {
  __typename: "ChangePasswordResult";
  error: changePassword_changePassword_error | null;
}

export interface changePassword {
  changePassword: changePassword_changePassword;
}

export interface changePasswordVariables {
  changePasswordDetails: ChangePasswordDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteUser
// ====================================================

export interface deleteUser_deleteAccount_error {
  __typename: "Error";
  message: string;
}

export interface deleteUser_deleteAccount {
  __typename: "DeleteAccountResult";
  error: deleteUser_deleteAccount_error | null;
}

export interface deleteUser {
  deleteAccount: deleteUser_deleteAccount;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateDietaryPreferences
// ====================================================

export interface UpdateDietaryPreferences_updateDietaryPreferences_error {
  __typename: "Error";
  message: string;
}

export interface UpdateDietaryPreferences_updateDietaryPreferences_data {
  __typename: "Diet";
  id: string;
  name: string;
}

export interface UpdateDietaryPreferences_updateDietaryPreferences {
  __typename: "UpdateDietaryPreferencesResult";
  error: UpdateDietaryPreferences_updateDietaryPreferences_error | null;
  data: UpdateDietaryPreferences_updateDietaryPreferences_data[] | null;
}

export interface UpdateDietaryPreferences {
  updateDietaryPreferences: UpdateDietaryPreferences_updateDietaryPreferences;
}

export interface UpdateDietaryPreferencesVariables {
  dietaryPreferences: DietaryPreferenceDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveDietaryPreferences
// ====================================================

export interface RemoveDietaryPreferences_removeDietaryPreferences_error {
  __typename: "Error";
  message: string;
}

export interface RemoveDietaryPreferences_removeDietaryPreferences_data {
  __typename: "Diet";
  id: string;
  name: string;
}

export interface RemoveDietaryPreferences_removeDietaryPreferences {
  __typename: "RemoveDietaryPreferencesResult";
  error: RemoveDietaryPreferences_removeDietaryPreferences_error | null;
  data: RemoveDietaryPreferences_removeDietaryPreferences_data[] | null;
}

export interface RemoveDietaryPreferences {
  removeDietaryPreferences: RemoveDietaryPreferences_removeDietaryPreferences;
}

export interface RemoveDietaryPreferencesVariables {
  dietaryPreferences: DietaryPreferenceDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateAllergyPreferences
// ====================================================

export interface UpdateAllergyPreferences_updateAllergyPreferences_error {
  __typename: "Error";
  message: string;
}

export interface UpdateAllergyPreferences_updateAllergyPreferences_data {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface UpdateAllergyPreferences_updateAllergyPreferences {
  __typename: "UpdateAllergyPreferencesResult";
  error: UpdateAllergyPreferences_updateAllergyPreferences_error | null;
  data: UpdateAllergyPreferences_updateAllergyPreferences_data[] | null;
}

export interface UpdateAllergyPreferences {
  updateAllergyPreferences: UpdateAllergyPreferences_updateAllergyPreferences;
}

export interface UpdateAllergyPreferencesVariables {
  allergyPreferences: AllergyPreferenceDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveAllergyPreferences
// ====================================================

export interface RemoveAllergyPreferences_removeAllergyPreferences_error {
  __typename: "Error";
  message: string;
}

export interface RemoveAllergyPreferences_removeAllergyPreferences_data {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface RemoveAllergyPreferences_removeAllergyPreferences {
  __typename: "RemoveAllergyPreferencesResult";
  error: RemoveAllergyPreferences_removeAllergyPreferences_error | null;
  data: RemoveAllergyPreferences_removeAllergyPreferences_data[] | null;
}

export interface RemoveAllergyPreferences {
  removeAllergyPreferences: RemoveAllergyPreferences_removeAllergyPreferences;
}

export interface RemoveAllergyPreferencesVariables {
  allergyPreferences: AllergyPreferenceDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfileVisibility
// ====================================================

export interface UpdateProfileVisibility_updateProfileVisibility_error {
  __typename: "Error";
  message: string;
}

export interface UpdateProfileVisibility_updateProfileVisibility {
  __typename: "UpdateProfileVisibilityResult";
  error: UpdateProfileVisibility_updateProfileVisibility_error | null;
}

export interface UpdateProfileVisibility {
  updateProfileVisibility: UpdateProfileVisibility_updateProfileVisibility;
}

export interface UpdateProfileVisibilityVariables {
  profileVisibilityDetails: ProfileVisibilityDetails;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRecipeComment
// ====================================================

export interface AddRecipeComment_addComment_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface AddRecipeComment_addComment_data_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface AddRecipeComment_addComment_data_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: AddRecipeComment_addComment_data_replies_submittedBy;
}

export interface AddRecipeComment_addComment_data {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: AddRecipeComment_addComment_data_submittedBy;
  replies: AddRecipeComment_addComment_data_replies[];
}

export interface AddRecipeComment_addComment_error {
  __typename: "Error";
  message: string;
}

export interface AddRecipeComment_addComment {
  __typename: "CommentResult";
  data: AddRecipeComment_addComment_data | null;
  error: AddRecipeComment_addComment_error | null;
}

export interface AddRecipeComment {
  addComment: AddRecipeComment_addComment;
}

export interface AddRecipeCommentVariables {
  recipeId: string;
  comment: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRecipeCommentReply
// ====================================================

export interface AddRecipeCommentReply_replyToComment_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface AddRecipeCommentReply_replyToComment_data_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface AddRecipeCommentReply_replyToComment_data_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: AddRecipeCommentReply_replyToComment_data_replies_submittedBy;
}

export interface AddRecipeCommentReply_replyToComment_data {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: AddRecipeCommentReply_replyToComment_data_submittedBy;
  replies: AddRecipeCommentReply_replyToComment_data_replies[];
}

export interface AddRecipeCommentReply_replyToComment_error {
  __typename: "Error";
  message: string;
}

export interface AddRecipeCommentReply_replyToComment {
  __typename: "CommentResult";
  data: AddRecipeCommentReply_replyToComment_data | null;
  error: AddRecipeCommentReply_replyToComment_error | null;
}

export interface AddRecipeCommentReply {
  replyToComment: AddRecipeCommentReply_replyToComment;
}

export interface AddRecipeCommentReplyVariables {
  commentId: string;
  comment: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeRecipe
// ====================================================

export interface LikeRecipe_likeRecipe_error {
  __typename: "Error";
  message: string;
}

export interface LikeRecipe_likeRecipe {
  __typename: "LikeRecipeResult";
  error: LikeRecipe_likeRecipe_error | null;
}

export interface LikeRecipe {
  likeRecipe: LikeRecipe_likeRecipe;
}

export interface LikeRecipeVariables {
  recipeId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnlikeRecipe
// ====================================================

export interface UnlikeRecipe_unlikeRecipe_error {
  __typename: "Error";
  message: string;
}

export interface UnlikeRecipe_unlikeRecipe {
  __typename: "UnlikeRecipeResult";
  error: UnlikeRecipe_unlikeRecipe_error | null;
}

export interface UnlikeRecipe {
  unlikeRecipe: UnlikeRecipe_unlikeRecipe;
}

export interface UnlikeRecipeVariables {
  recipeId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeComment
// ====================================================

export interface LikeComment_likeComment_error {
  __typename: "Error";
  message: string;
}

export interface LikeComment_likeComment {
  __typename: "LikeCommentResult";
  error: LikeComment_likeComment_error | null;
}

export interface LikeComment {
  likeComment: LikeComment_likeComment;
}

export interface LikeCommentVariables {
  commentId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnlikeComment
// ====================================================

export interface UnlikeComment_unlikeComment_error {
  __typename: "Error";
  message: string;
}

export interface UnlikeComment_unlikeComment {
  __typename: "UnlikeCommentResult";
  error: UnlikeComment_unlikeComment_error | null;
}

export interface UnlikeComment {
  unlikeComment: UnlikeComment_unlikeComment;
}

export interface UnlikeCommentVariables {
  commentId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteComment
// ====================================================

export interface DeleteComment_deleteComment_error {
  __typename: "Error";
  message: string;
}

export interface DeleteComment_deleteComment {
  __typename: "DeleteCommentResult";
  error: DeleteComment_deleteComment_error | null;
}

export interface DeleteComment {
  deleteComment: DeleteComment_deleteComment;
}

export interface DeleteCommentVariables {
  commentId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: recipes
// ====================================================

export interface recipes_recipes_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface recipes_recipes_data_categories {
  __typename: "Category";
  name: string;
}

export interface recipes_recipes_data_diets {
  __typename: "Diet";
  name: string;
}

export interface recipes_recipes_data_allergies {
  __typename: "Allergy";
  name: string;
}

export interface recipes_recipes_data_ingredients {
  __typename: "Ingredient";
  name: string;
  description: string | null;
  quantity: number;
  unit: string | null;
}

export interface recipes_recipes_data_steps {
  __typename: "RecipeStep";
  title: string;
  description: string;
  image: string;
}

export interface recipes_recipes_data_comments_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface recipes_recipes_data_comments_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface recipes_recipes_data_comments_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: recipes_recipes_data_comments_replies_submittedBy;
}

export interface recipes_recipes_data_comments {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: recipes_recipes_data_comments_submittedBy;
  replies: recipes_recipes_data_comments_replies[];
}

export interface recipes_recipes_data {
  __typename: "Recipe";
  id: string;
  subtitle: string;
  title: string;
  description: string;
  submittedBy: recipes_recipes_data_submittedBy;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: string;
  liked: boolean;
  categories: recipes_recipes_data_categories[];
  diets: recipes_recipes_data_diets[];
  allergies: recipes_recipes_data_allergies[];
  ingredients: recipes_recipes_data_ingredients[];
  steps: recipes_recipes_data_steps[];
  comments: recipes_recipes_data_comments[];
}

export interface recipes_recipes_error {
  __typename: "Error";
  message: string;
}

export interface recipes_recipes {
  __typename: "RecipesResult";
  data: recipes_recipes_data[] | null;
  error: recipes_recipes_error | null;
}

export interface recipes {
  recipes: recipes_recipes;
}

export interface recipesVariables {
  offset: number;
  limit: number;
  query: string;
  sort: Sort;
  filter: RecipeFilter;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewsFeed
// ====================================================

export interface NewsFeed_newsFeed_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface NewsFeed_newsFeed_data_categories {
  __typename: "Category";
  name: string;
}

export interface NewsFeed_newsFeed_data_diets {
  __typename: "Diet";
  name: string;
}

export interface NewsFeed_newsFeed_data_allergies {
  __typename: "Allergy";
  name: string;
}

export interface NewsFeed_newsFeed_data_ingredients {
  __typename: "Ingredient";
  name: string;
  description: string | null;
  quantity: number;
  unit: string | null;
}

export interface NewsFeed_newsFeed_data_steps {
  __typename: "RecipeStep";
  title: string;
  description: string;
  image: string;
}

export interface NewsFeed_newsFeed_data_comments_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface NewsFeed_newsFeed_data_comments_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface NewsFeed_newsFeed_data_comments_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: NewsFeed_newsFeed_data_comments_replies_submittedBy;
}

export interface NewsFeed_newsFeed_data_comments {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: NewsFeed_newsFeed_data_comments_submittedBy;
  replies: NewsFeed_newsFeed_data_comments_replies[];
}

export interface NewsFeed_newsFeed_data {
  __typename: "Recipe";
  id: string;
  subtitle: string;
  title: string;
  description: string;
  submittedBy: NewsFeed_newsFeed_data_submittedBy;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: string;
  liked: boolean;
  categories: NewsFeed_newsFeed_data_categories[];
  diets: NewsFeed_newsFeed_data_diets[];
  allergies: NewsFeed_newsFeed_data_allergies[];
  ingredients: NewsFeed_newsFeed_data_ingredients[];
  steps: NewsFeed_newsFeed_data_steps[];
  comments: NewsFeed_newsFeed_data_comments[];
}

export interface NewsFeed_newsFeed_error {
  __typename: "Error";
  message: string;
}

export interface NewsFeed_newsFeed {
  __typename: "RecipesResult";
  data: NewsFeed_newsFeed_data[] | null;
  error: NewsFeed_newsFeed_error | null;
}

export interface NewsFeed {
  newsFeed: NewsFeed_newsFeed;
}

export interface NewsFeedVariables {
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Trending
// ====================================================

export interface Trending_trending_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface Trending_trending_data_categories {
  __typename: "Category";
  name: string;
}

export interface Trending_trending_data_diets {
  __typename: "Diet";
  name: string;
}

export interface Trending_trending_data_allergies {
  __typename: "Allergy";
  name: string;
}

export interface Trending_trending_data_ingredients {
  __typename: "Ingredient";
  name: string;
  description: string | null;
  quantity: number;
  unit: string | null;
}

export interface Trending_trending_data_steps {
  __typename: "RecipeStep";
  title: string;
  description: string;
  image: string;
}

export interface Trending_trending_data_comments_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface Trending_trending_data_comments_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface Trending_trending_data_comments_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: Trending_trending_data_comments_replies_submittedBy;
}

export interface Trending_trending_data_comments {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: Trending_trending_data_comments_submittedBy;
  replies: Trending_trending_data_comments_replies[];
}

export interface Trending_trending_data {
  __typename: "Recipe";
  id: string;
  subtitle: string;
  title: string;
  description: string;
  submittedBy: Trending_trending_data_submittedBy;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: string;
  liked: boolean;
  categories: Trending_trending_data_categories[];
  diets: Trending_trending_data_diets[];
  allergies: Trending_trending_data_allergies[];
  ingredients: Trending_trending_data_ingredients[];
  steps: Trending_trending_data_steps[];
  comments: Trending_trending_data_comments[];
}

export interface Trending_trending_error {
  __typename: "Error";
  message: string;
}

export interface Trending_trending {
  __typename: "RecipesResult";
  data: Trending_trending_data[] | null;
  error: Trending_trending_error | null;
}

export interface Trending {
  trending: Trending_trending;
}

export interface TrendingVariables {
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: recipe
// ====================================================

export interface recipe_recipe_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface recipe_recipe_data_categories {
  __typename: "Category";
  name: string;
}

export interface recipe_recipe_data_diets {
  __typename: "Diet";
  name: string;
}

export interface recipe_recipe_data_allergies {
  __typename: "Allergy";
  name: string;
}

export interface recipe_recipe_data_ingredients {
  __typename: "Ingredient";
  name: string;
  description: string | null;
  quantity: number;
  unit: string | null;
}

export interface recipe_recipe_data_steps {
  __typename: "RecipeStep";
  title: string;
  description: string;
  image: string;
}

export interface recipe_recipe_data_comments_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface recipe_recipe_data_comments_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface recipe_recipe_data_comments_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: recipe_recipe_data_comments_replies_submittedBy;
}

export interface recipe_recipe_data_comments {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: recipe_recipe_data_comments_submittedBy;
  replies: recipe_recipe_data_comments_replies[];
}

export interface recipe_recipe_data {
  __typename: "Recipe";
  id: string;
  subtitle: string;
  title: string;
  description: string;
  submittedBy: recipe_recipe_data_submittedBy;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: string;
  liked: boolean;
  categories: recipe_recipe_data_categories[];
  diets: recipe_recipe_data_diets[];
  allergies: recipe_recipe_data_allergies[];
  ingredients: recipe_recipe_data_ingredients[];
  steps: recipe_recipe_data_steps[];
  comments: recipe_recipe_data_comments[];
}

export interface recipe_recipe_error {
  __typename: "Error";
  message: string;
}

export interface recipe_recipe {
  __typename: "RecipeResult";
  data: recipe_recipe_data | null;
  error: recipe_recipe_error | null;
}

export interface recipe {
  recipe: recipe_recipe;
}

export interface recipeVariables {
  recipeId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_data_dietaryPreferences {
  __typename: "Diet";
  id: string;
  name: string;
}

export interface Me_me_data_allergyPreferences {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface Me_me_data {
  __typename: "FullUser";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
  likeCount: number;
  followerCount: number;
  followingCount: number;
  recipeCount: number;
  isFollowing: boolean | null;
  dietaryPreferences: Me_me_data_dietaryPreferences[];
  allergyPreferences: Me_me_data_allergyPreferences[];
  visibility: Privacy;
}

export interface Me_me {
  __typename: "FullUserResult";
  data: Me_me_data | null;
}

export interface Me {
  me: Me_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Diets
// ====================================================

export interface Diets_diets_data {
  __typename: "Diet";
  id: string;
  name: string;
}

export interface Diets_diets_error {
  __typename: "Error";
  message: string;
}

export interface Diets_diets {
  __typename: "DietsResult";
  data: Diets_diets_data[];
  error: Diets_diets_error | null;
}

export interface Diets {
  diets: Diets_diets;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Allergies
// ====================================================

export interface Allergies_allergies_data {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface Allergies_allergies_error {
  __typename: "Error";
  message: string;
}

export interface Allergies_allergies {
  __typename: "AllergiesResult";
  data: Allergies_allergies_data[];
  error: Allergies_allergies_error | null;
}

export interface Allergies {
  allergies: Allergies_allergies;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: comment
// ====================================================

export interface comment_comment_data_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface comment_comment_data_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface comment_comment_data_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: comment_comment_data_replies_submittedBy;
}

export interface comment_comment_data {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: comment_comment_data_submittedBy;
  replies: comment_comment_data_replies[];
}

export interface comment_comment_error {
  __typename: "Error";
  message: string;
}

export interface comment_comment {
  __typename: "CommentResult";
  data: comment_comment_data | null;
  error: comment_comment_error | null;
}

export interface comment {
  comment: comment_comment;
}

export interface commentVariables {
  commentId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DietFragment
// ====================================================

export interface DietFragment {
  __typename: "Diet";
  id: string;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AllergyFragment
// ====================================================

export interface AllergyFragment {
  __typename: "Allergy";
  id: string;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FullUserFragment
// ====================================================

export interface FullUserFragment_dietaryPreferences {
  __typename: "Diet";
  id: string;
  name: string;
}

export interface FullUserFragment_allergyPreferences {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface FullUserFragment {
  __typename: "FullUser";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
  likeCount: number;
  followerCount: number;
  followingCount: number;
  recipeCount: number;
  isFollowing: boolean | null;
  dietaryPreferences: FullUserFragment_dietaryPreferences[];
  allergyPreferences: FullUserFragment_allergyPreferences[];
  visibility: Privacy;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RecipeCommentFragment
// ====================================================

export interface RecipeCommentFragment_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface RecipeCommentFragment_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface RecipeCommentFragment_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: RecipeCommentFragment_replies_submittedBy;
}

export interface RecipeCommentFragment {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: RecipeCommentFragment_submittedBy;
  replies: RecipeCommentFragment_replies[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RecipeFragment
// ====================================================

export interface RecipeFragment_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface RecipeFragment_categories {
  __typename: "Category";
  name: string;
}

export interface RecipeFragment_diets {
  __typename: "Diet";
  name: string;
}

export interface RecipeFragment_allergies {
  __typename: "Allergy";
  name: string;
}

export interface RecipeFragment_ingredients {
  __typename: "Ingredient";
  name: string;
  description: string | null;
  quantity: number;
  unit: string | null;
}

export interface RecipeFragment_steps {
  __typename: "RecipeStep";
  title: string;
  description: string;
  image: string;
}

export interface RecipeFragment_comments_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface RecipeFragment_comments_replies_submittedBy {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  email: string;
  avatarURI: string | null;
  verified: boolean;
}

export interface RecipeFragment_comments_replies {
  __typename: "RecipeCommentReply";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  submittedBy: RecipeFragment_comments_replies_submittedBy;
}

export interface RecipeFragment_comments {
  __typename: "RecipeComment";
  id: string;
  contents: string;
  likeCount: number;
  replyCount: number;
  liked: boolean;
  createdAt: string;
  deleted: boolean;
  submittedBy: RecipeFragment_comments_submittedBy;
  replies: RecipeFragment_comments_replies[];
}

export interface RecipeFragment {
  __typename: "Recipe";
  id: string;
  subtitle: string;
  title: string;
  description: string;
  submittedBy: RecipeFragment_submittedBy;
  commentCount: number;
  likeCount: number;
  createdAt: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: string;
  liked: boolean;
  categories: RecipeFragment_categories[];
  diets: RecipeFragment_diets[];
  allergies: RecipeFragment_allergies[];
  ingredients: RecipeFragment_ingredients[];
  steps: RecipeFragment_steps[];
  comments: RecipeFragment_comments[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ErrorFragment
// ====================================================

export interface ErrorFragment {
  __typename: "Error";
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Privacy {
  FRIENDS = "FRIENDS",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export enum Sort {
  NEW = "NEW",
  POPULAR = "POPULAR",
  RELEVANT = "RELEVANT",
}

export interface AllergyInput {
  name: string;
}

export interface AllergyPreferenceDetails {
  allergies: string[];
}

export interface CategoryInput {
  name: string;
}

export interface ChangePasswordDetails {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface DietInput {
  name: string;
}

export interface DietaryPreferenceDetails {
  diets: string[];
}

export interface IngredientInput {
  name: string;
  description?: string | null;
  quantity: number;
  unit?: string | null;
}

export interface IngredientsFilter {
  includes?: string[] | null;
  excludes?: string[] | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ProfileDetails {
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  profileImage?: any | null;
}

export interface ProfileVisibilityDetails {
  visibility: Privacy;
}

export interface RecipeFilter {
  ingredients?: IngredientsFilter | null;
  categories?: string[] | null;
  allergies?: string[] | null;
  diets?: string[] | null;
  cookTime?: string | null;
}

export interface RecipeInput {
  title: string;
  subtitle: string;
  description: string;
  servingCount: number;
  timeEstimate: string;
  coverImage: any;
  categories: CategoryInput[];
  diets: DietInput[];
  allergies: AllergyInput[];
  ingredients: IngredientInput[];
  steps: RecipeStepInput[];
  visibility: Privacy;
  likeability: Privacy;
  commentability: Privacy;
}

export interface RecipeStepInput {
  image: any;
  title: string;
  description: string;
}

export interface SignupInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

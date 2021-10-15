import React, { useContext, useState } from "react";
import { Divider, ListItem } from "@ui-kitten/components";
import {
  AlphabetType,
  Background,
  Icons,
  Input,
  LazyListAlpha,
  TopNavigation,
} from "@greeneggs/ui";
import {
  Allergies,
  AllergiesVariables,
  Allergies_allergies_data,
  AllergyInput,
  RecipeFilter,
  Sort,
} from "@greeneggs/types/graphql";
import { Queries } from "@greeneggs/graphql";
import { AddRecipeContext } from "@greeneggs/providers";
import { useNavigation } from "@react-navigation/core";

export const CreateAllergy = () => {
  const [query, setQuery] = useState("");
  const { allergiesFieldArray } = useContext(AddRecipeContext);
  const navigation = useNavigation();

  function pick(allergy: AllergyInput) {
    allergiesFieldArray?.append(allergy);
    navigation.goBack();
  }

  return (
    <Background>
      <TopNavigation title="Choose an allergy" />
      <Input
        style={{ padding: 16 }}
        placeholder="Search allergies..."
        accessoryLeft={Icons.Search}
        onChangeText={setQuery}
        value={query}
      />
      <LazyListAlpha<
        Allergies,
        AllergiesVariables,
        Allergies_allergies_data,
        Sort,
        RecipeFilter
      >
        renderItem={(item) => (
          <>
            <ListItem
              title={item.name}
              onPress={() => {
                pick(item);
              }}
            />
            <Divider />
          </>
        )}
        categoriseItem={(item) => item.name[0].toLowerCase() as AlphabetType}
        query={Queries.GET_ALLERGIES}
        variables={{
          query,
        }}
        dataKey="allergies"
      />
    </Background>
  );
};

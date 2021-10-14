import React from "react";
import { List, ListItem, Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { RecipeForm } from "../add-recipe";
import { Icons, Callout, AddListItem } from "@greeneggs/ui";
import { useFieldArray } from "react-hook-form";
import { AddRecipeStyles } from "../add-recipe-styles";
import { AddRecipePartTemplate } from "../add-recipe-part-template";
import { useNavigation } from "@react-navigation/native";

interface IAddRecipeAllergies {
  form: RecipeForm;
}

export const AddRecipeAllergies = ({
  form,
}: IAddRecipeAllergies) => {
  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "allergies",
  });
  const navigation = useNavigation();

  return (
    <AddRecipePartTemplate
      title="Allergies"
      createButtonTitle="ADD ALLERGIES"
      onPressCreate={() =>
        navigation.navigate("CreateAllergy", {
          append,
        })
      }
      emptyStateTitle="No allergies"
      emptyStateDescription="Add any potential allergies your recipe may trigger."
      listItem={({ item, index }) => (
        <>
          <ListItem
            title={item.name}
            accessoryRight={(props) => (
              <Icons.Cross {...props} onPress={() => remove(index)} />
            )}
          />
        </>
      )}
      data={fields}
    />
  );
};

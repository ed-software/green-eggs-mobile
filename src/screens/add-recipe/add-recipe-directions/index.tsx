import React, { useEffect } from "react";
import { List, ListItem, Text } from "@ui-kitten/components";
import { ScrollView, Image } from "react-native";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { useFieldArray } from "react-hook-form";
import { Icons, AddListItem, Callout } from "@greeneggs/ui";

import { RecipeForm } from "../add-recipe";
import { AddRecipeStyles } from '../add-recipe-styles';

interface IAddRecipeDirections {
  form: RecipeForm;
  navigation: any;
}

export const AddRecipeDirections = ({ form, navigation }: IAddRecipeDirections) => {
  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "steps",
  });

  const directionsLength = fields?.length || 0;
  useEffect(() => {
    if (directionsLength > 0) {
      form.clearErrors("steps");
    }
  }, [directionsLength]);

  return (
    <ScrollView>
      <Callout
        type="info"
        message="Include steps that must be completed in order to follow this recipe."
        style={AddRecipeStyles.view}
      />
      <Text
        category="h5"
        style={{ ...AddRecipeStyles.heading, ...AddRecipeStyles.view }}
      >
        Directions
      </Text>
      <List
        data={fields}
        renderItem={({ item, index }) =>
          item ? (
            <ListItem
              title={item.title ?? undefined}
              description={item.description}
              accessoryRight={(props) => (
                <>
                  <Image
                    source={{
                      uri: item.image && (item.image as ImageInfo).uri,
                    }}
                    style={{ width: 48, height: 48 }}
                  />
                  <Icons.Cross {...props} onPress={() => remove(index)} />
                </>
              )}
            />
          ) : null
        }
      />
      <AddListItem
        label="ADD STEP"
        onPress={() =>
          navigation.navigate("CreateStep", {
            append,
          })
        }
      />
    </ScrollView>
  );
};
import React, { FC, useContext, useState } from 'react';
import { Queries } from "@greeneggs/graphql";
import { Divider } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import { Allergies, AllergiesVariables, Allergies_allergies_data, RecipeFilter, Sort } from '@greeneggs/types/graphql';
import { SearchContext } from '@greeneggs/providers/search-state-provider';
import { Input, TopNavigation, Background, Icons, SelectableListItem, AlphabetType, LazyListAlpha } from '@greeneggs/ui';
import { AddToFilter } from '../common';

const FilterRecipeAllergies: FC = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const { searchState, setSearchState } = useContext(SearchContext);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>(
    searchState.filter.allergies ?? []
  );

  const setSelected = (selected: boolean, id: string) => {
    setSelectedAllergies(
      selected
        ? [...selectedAllergies, id]
        : [...selectedAllergies.filter((allergies) => allergies !== id)]
    );
  };

  const addToFilter = () => {
    setSearchState?.({
      ...searchState,
      filter: {
        ...searchState.filter,
        allergies: selectedAllergies,
      },
    });
    navigation.goBack();
  };


  return (
    <Background>
      <TopNavigation title="Allergies" />
      <Input
        style={{ padding: 16, backgroundColor: 'white' }}
        placeholder="Search Allergies"
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
            <SelectableListItem
              title={item.name}
              selected={selectedAllergies.includes(item.id)}
              setSelected={(selected) => setSelected(selected, item.id)}
            />
            <Divider />
          </>
        )}
        categoriseItem={(item) => item.name[0].toLowerCase() as AlphabetType}
        query={Queries.GET_ALLERGIES}
        emptyMessage={"No allergies found"}
        errorMessage={"Error"}
        variables={{
          query,
        }}
        dataKey="allergies"
      />
      <AddToFilter
        clearFilters={() => setSelectedAllergies([])}
        filterCount={selectedAllergies.length}
        addToFilter={addToFilter}
      />
    </Background>
  );
}

export default FilterRecipeAllergies;
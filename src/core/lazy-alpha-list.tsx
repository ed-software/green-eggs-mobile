import React, { FC } from "react";
import {
  CommonVariables,
  LazyListProps,
  TDataWithData,
  useLazyList,
  useListRefresh,
} from "./lazy-list";
import Alert from "./alert/Alert";
import LoadingScreen from "../screens/loading/LoadingScreen";
import AlphaList, { buildAlphaListItems, CategoriseItem } from "./alpha-list";
import { View } from "react-native";
import Background from "./background";

interface LazyListAlphaProps<TData, TVariables, TDataType>
  extends Omit<LazyListProps<TData, TVariables, TDataType>, "renderItem"> {
  renderItem: FC<TDataType>;
  categoriseItem: CategoriseItem<TDataType>;
}

const LazyListAlpha = <
  TData extends TDataWithData<TData, TDataType>,
  TVariables extends Partial<CommonVariables<SortType, FilterType>>,
  TDataType,
  SortType,
  FilterType
>({
  query,
  variables,
  dataKey,
  renderItem,
  emptyMessage,
  categoriseItem,
}: LazyListAlphaProps<TData, TVariables, TDataType>) => {
  const { loading, error, data, refetch, nextPage } = useLazyList<
    TData,
    TVariables,
    TDataType,
    SortType,
    FilterType
  >({ query, variables, dataKey, limit: 10 });
  const { refreshing, onRefresh } = useListRefresh(refetch);

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  if (error) {
    return (
      <Background>
        <Alert message="There was an error" type="danger" />
      </Background>
    );
  }

  if (data === null || data === undefined || data.length === 0) {
    return (
      <View style={{flex: 1}}>
        <Alert
          style={{ marginHorizontal: 16 }}
          message={emptyMessage}
          type="info"
        />
      </View>
    );
  }

  const items = buildAlphaListItems({
    items: data,
    categoriseItem,
  });

  return (
    <AlphaList
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={() => nextPage()}
      onEndReachedThreshold={0.5}
      items={items}
      renderItem={renderItem}
    />
  );
};

export default LazyListAlpha;

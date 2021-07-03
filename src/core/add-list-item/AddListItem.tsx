import React from "react";
import { Divider, ListItem, Text } from "@ui-kitten/components";
import { Add } from "../icons/Icons";

interface IAddListItem {
  label: string;
}

const AddListItem = ({ label }: IAddListItem) => (
  <>
    <Divider />
    <ListItem style={{ justifyContent: "center" }}>
      <Add
        style={{ width: 24, height: 24, marginRight: 8, marginLeft: -32 }}
        fill="#2E3A59"
      />
      <Text category="label">{label}</Text>
    </ListItem>
  </>
);

export default AddListItem;
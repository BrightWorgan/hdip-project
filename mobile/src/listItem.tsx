import * as React from "react";
import { List } from "react-native-paper";

const FindListItem = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    onPress={() => {
      console.log("test press");
    }}
  />
);

export default FindListItem;

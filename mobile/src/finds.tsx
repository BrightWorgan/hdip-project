import * as React from "react";
import { List } from "react-native-paper";
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const MyComponent = () => (
  <div>
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      //   left={(props) => <List.Icon {...props} icon="file-find-outline" />}
      right={(props) => <List.Icon {...props} icon="camera-plus" />}
    />
  </div>
);

export default MyComponent;

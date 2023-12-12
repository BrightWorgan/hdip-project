import * as React from "react";
import { List } from "react-native-paper";

const FindListItem = (props: any) => (
  <List.Item
    title={"Find #: " + props.find.findNumber}
    description={
      "Context #: " +
      props.find.contextNumber +
      " |" +
      " Fill #: " +
      props.find.fillNumber +
      " |" +
      " Material Type: " +
      props.find.material +
      "" +
      ""
    }
    left={(props) => <List.Icon {...props} icon="file-find-outline" />}
    onPress={() => {
      props.onSelect(props.find);
    }}
  />
);

export default FindListItem;

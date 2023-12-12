import * as React from "react";
import { List } from "react-native-paper";

const FindListItem = (props: any) => (
  // <td>{find.findNumber}</td>
  // <td>{find.contextNumber}</td>
  // <td>{find.fillNumber}</td>
  // <td>{find.description}</td>
  // <td>{find.material}</td>
  // <td>{find.photograph}</td>
  // <td>{find.bagged}</td>
  // <td>{new Date(find.date).toDateString()}</td>
  // <td>
  //   {find.forename + " " + find.surname.substring(0, 1) + "."}
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

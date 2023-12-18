import * as React from "react";
import FindListItem from "./listItem";
import { View, StyleSheet } from "react-native";
import FindInfo from "./findInfoPage";
import { useState, useEffect } from "react";
import util from "./util";
import { Button, Modal, Portal, Text } from "react-native-paper";
import { PaperProvider } from "react-native-paper";

const FindView = (props: any) => {
  // use state variables
  const [finds, setFinds] = useState([]);

  const selectFind = (find: any) => {
    props.setSelectedFind(find);
    console.log("selected has been called");
  };

  useEffect(() => {
    util.get("/find-me?limit=20").then((result) => {
      setFinds(result?.data);
    });
  }, [props.selectedFind]);

  const isModalVisible = props.selectedFind !== null;
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };

  return (
    <View style={{ flex: 1 }}>
      {isModalVisible
        ? null
        : finds?.map((find) => {
            return <FindListItem find={find} onSelect={selectFind} />;
          })}
      {isModalVisible ? <FindInfo find={props.selectedFind} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  backDropContainer: {
    flex: 1,
    backgroundColor: "black",
    opacity: 1,
  },
  modalContainer: {
    flex: 0.5,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});

export default FindView;

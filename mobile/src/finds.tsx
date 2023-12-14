import * as React from "react";
import FindListItem from "./listItem";
import FindInfo from "./findInfoPage";
import { useState, useEffect } from "react";
import util from "./util";
import { Button, Modal, Portal, Text } from "react-native-paper";
import { PaperProvider } from "react-native-paper";

const FindView = (props: any) => {
  // use state variables
  const [finds, setFinds] = useState([]);
  const [selectedFind, setSelectedFind] = useState(null);

  const selectFind = (find: any) => {
    setSelectedFind(find);
    console.log("selected has been called");
  };

  const clearSelected = () => {
    setSelectedFind(null);
    console.log("clear selected has been called");
  };

  useEffect(() => {
    util.get("/find-me?limit=20").then((result) => {
      setFinds(result?.data);
    });
  }, [selectedFind]);

  const isModalVisible = selectedFind !== null;
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    // height: "100%",
  };

  return (
    <div>
      {finds?.map((find) => {
        return <FindListItem find={find} onSelect={selectFind} />;
      })}
      <PaperProvider>
        <Portal>
          <Modal
            visible={isModalVisible}
            onDismiss={() => clearSelected()}
            dismissable
            contentContainerStyle={containerStyle}
          >
            <FindInfo find={selectedFind} close={clearSelected} />
            <Button
              /*buttonColor="#73a2d1"*/ textColor="#23232b"
              onPress={() => clearSelected()}
            >
              Close
            </Button>
          </Modal>
        </Portal>
      </PaperProvider>
    </div>
  );
};

export default FindView;

import * as React from "react";
import FindListItem from "./listItem";
import { useState, useEffect } from "react";
import util from "./util";
import { Modal, Portal, Text } from "react-native-paper";
import { PaperProvider } from "react-native-paper";

const FindView = () => {
  // use state variables
  const [finds, setFinds] = useState([]);
  const [selectedFind, setSelectedFind] = useState(null);

  const isModalVisible = selectedFind !== null;

  const selectFind = (find: any) => {
    setSelectedFind(find);
  };

  const clearSelected = () => {
    setSelectedFind(null);
  };

  useEffect(() => {
    util.get("/find-me").then((result) => {
      setFinds(result?.data);
    });
  }, []);

  return (
    <div>
      {finds?.map((find) => {
        return <FindListItem find={find} onSelect={selectFind} />;
      })}
      <PaperProvider>
        <Portal>
          <Modal
            visible={isModalVisible}
            onDismiss={clearSelected}
            //   contentContainerStyle={containerStyle}
          >
            <Text>
              Testing Modal Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, to
            </Text>
          </Modal>
        </Portal>
      </PaperProvider>
    </div>
  );
};

export default FindView;

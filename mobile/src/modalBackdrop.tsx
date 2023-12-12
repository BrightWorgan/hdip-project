import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const ModalBackdrop = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <div>
      <PaperProvider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Testing Modal</Text>
          </Modal>
        </Portal>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Open Modal
        </Button>
      </PaperProvider>
    </div>
  );
};

export default ModalBackdrop;

import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { lightColors, darkColors } from "react-floating-action-button";

type TeamModalProps = {
  isOpen: boolean;
  toggle: () => void;
};

const TeamModal = (props: TeamModalProps) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Add a new Team Member</ModalHeader>
        <ModalBody>***** Form will be put here *****</ModalBody>
        <ModalFooter>
          <Button
            style={{
              backgroundColor: darkColors.cyan,
              color: lightColors.teal,
            }}
            onClick={() => alert("Confirm button is working!")}
          >
            Confirm
          </Button>{" "}
          <Button
            style={{
              backgroundColor: darkColors.cyan,
              color: lightColors.teal,
            }}
            onClick={props.toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TeamModal;

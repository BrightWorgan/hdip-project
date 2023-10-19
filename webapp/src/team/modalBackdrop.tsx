import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { lightColors, darkColors } from "react-floating-action-button";
// import { Form, Col, Row, FormGroup, Label, Input } from "reactstrap";
import AddForm from "./addForm";

type TeamModalProps = {
  isOpen: boolean;
  toggle: () => void;
  onAdd: (user: any) => void;
};

const TeamModal = (props: TeamModalProps) => {
  const addClose = (user) => {
    props.onAdd(user);
    props.toggle();
  };

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Add a new Team Member</ModalHeader>
        <ModalBody>{<AddForm onSubmit={addClose} />}</ModalBody>
        <ModalFooter>
          {/* <Button
            style={{
              backgroundColor: darkColors.cyan,
              color: lightColors.teal,
            }}
            //onClick={() => alert("Confirm button is working!")}
            onClick={() => props.onAdd(user)}
          >
            Confirm
          </Button>{" "} */}
          {/* <Button
            style={{
              backgroundColor: darkColors.cyan,
              color: lightColors.teal,
            }}
            onClick={props.toggle}
          >
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TeamModal;

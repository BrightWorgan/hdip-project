import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

type TeamModalProps = {
  isOpen: boolean;
  toggle: () => void;
  onAdd: (user: any) => void;
  header: string;
  children: React.ReactElement;
};

const ModalBackdrop = (props: TeamModalProps) => {
  const addClose = (user: any) => {
    props.onAdd(user);
    props.toggle();
  };

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.header}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalBackdrop;

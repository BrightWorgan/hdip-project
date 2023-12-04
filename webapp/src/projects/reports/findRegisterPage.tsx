import ModalBackdrop from "../../common/modalBackdrop";
import FAB from "../../common/fab";
import FindsForm from "./cutFillAddForm";
import FindsTable from "./findsTable";
import { useState } from "react";
import util from "../../util";
import toast from "react-hot-toast";

const FindRegister = (props: any) => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);

  const [selectedFinds, setSelectedFinds] = useState<any[]>([]);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const onChecked = (find: any) => {
    const existingFindIndex = selectedFinds.findIndex(
      (aSelectedFind) => aSelectedFind.number === find.number
    );
    if (existingFindIndex === -1) {
      const newSelectedFinds = selectedFinds.concat([find]);
      setSelectedFinds(newSelectedFinds);
    } else {
      const newSelectedFinds = selectedFinds.filter(
        (_item, index) => index !== existingFindIndex
      );
      setSelectedFinds(newSelectedFinds);
    }
  };

  // Context POST
  const onAdd = async (find: any) => {
    // send to backend
    await util.post("/find", find);
    toggle();
    toast("New Find Added");
  };

  // Context EDIT --> TO DO

  // Context Delete
  const onRemove = () => {
    // TO DO:
    // remove things
    console.log("Trying to remove find");
    toast("Find Removed");
  };

  return (
    <div>
      <h4>Context Register:</h4>
      <FindsTable onChecked={onChecked} />
      <FAB name="Find" onAdd={onToggle} onRemove={() => onRemove()} />
      <ModalBackdrop
        header="Add to the Find Regisiter"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={onAdd}
      >
        <FindsForm onSubmit={onAdd} toggle={onToggle} />
      </ModalBackdrop>
    </div>
  );
};
export default FindRegister;

import ModalBackdrop from "../../common/modalBackdrop";
import FAB from "../../common/fab";
import ContextForm from "./cutFillAddForm";
import ContextTable from "./cutFillTable";
import { useState } from "react";
import util from "../../util";
import toast from "react-hot-toast";

const ContextRegister = (props: any) => {
  // state variable
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  // Context POST
  const onAdd = async (context: any) => {
    // send to backend
    await util.post("/context", context);
    toggle();
    toast("New Context Added");
  };

  // Context EDIT --> TO DO

  // Context Delete
  const onRemove = () => {
    // TO DO:
    // remove things
    console.log("Trying to remove projesct(s)");
    toast("Context Removed");
  };

  return (
    <div>
      <h4>Context Register:</h4>
      <ContextTable />
      <FAB name="Context" onAdd={onToggle} onRemove={() => onRemove()} />
      <ModalBackdrop
        header="Add to the Context Regisiter"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={onAdd}
      >
        <ContextForm onSubmit={onAdd} toggle={onToggle} />
      </ModalBackdrop>
    </div>
  );
};
export default ContextRegister;

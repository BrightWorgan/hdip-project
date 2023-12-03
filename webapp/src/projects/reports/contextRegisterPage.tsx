import ModalBackdrop from "../../common/modalBackdrop";
import FAB from "../../common/fab";
import ContextForm from "./cutFillAddForm";
import ContextTable from "./cutFillTable";
import { useEffect, useState } from "react";
import util from "../../util";
import toast from "react-hot-toast";

const ContextRegister = (props: any) => {
  // state variable
  const [isOpen, setIsOpen] = useState(false);
  const [allContext, setAllContext] = useState<any[]>([]);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const id = props.project.projectID;

  // Context Get
  useEffect(() => {
    util.get("/context/" + id).then(async (result) => {
      // axios way:
      setAllContext(result?.data);
    });
  }, [isOpen, setIsOpen]);

  // Context POST
  const onAdd = async (context: any) => {
    // send to backend
    await util.post("/context/" + id, context);
    toggle();
    toast("New Context Added");
  };

  // Context EDIT --> TO DO

  // Context Delete
  const onRemove = () => {
    // TO DO:
    // remove things
    console.log("Trying to remove context");
    toast("Context Removed");
  };

  return (
    <div>
      <h4>Context Register:</h4>
      <ContextTable contexts={allContext} />
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

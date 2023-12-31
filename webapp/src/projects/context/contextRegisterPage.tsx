import ModalBackdrop from "../../common/modalBackdrop";
import FAB from "../../common/fab";
import ContextForm from "./cutFillAddForm";
import ContextTable from "./cutFillTable";
import { useEffect, useState } from "react";
import util from "../../util";
import toast from "react-hot-toast";

const ContextRegister = (props: any) => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);
  const [allContext, setAllContext] = useState<any[]>([]);
  const [selectedContexts, setSelectedContexts] = useState<any[]>([]);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const onChecked = (context: any) => {
    const existingContextIndex = selectedContexts.findIndex(
      (aSelectedContext) =>
        aSelectedContext.contextNumber === context.contextNumber
    );
    if (existingContextIndex === -1) {
      const newSelectedContexts = selectedContexts.concat([context]);
      setSelectedContexts(newSelectedContexts);
      console.log(newSelectedContexts);
    } else {
      const newSelectedContexts = selectedContexts.filter(
        (_item, index) => index !== existingContextIndex
      );
      setSelectedContexts(newSelectedContexts);
      console.log(newSelectedContexts);
    }
  };

  const id = props.project.projectID;

  // Context Get
  useEffect(() => {
    util.get("/context/" + id).then(async (result) => {
      // axios way:
      setAllContext(result?.data);
    });
  }, [isOpen, setIsOpen, selectedContexts]);

  // Context POST
  const onAdd = async (context: any) => {
    // send to backend
    await util.post("/context/" + id, context);
    toggle();
    toast("New Context Added");
  };

  // Context EDIT --> TO DO
  //

  // remove logic
  const onRemove = async () => {
    console.log("Trying to remove context(s)");
    let idArray = [];
    for (let i = 0; i < selectedContexts.length; i += 1) {
      idArray.push(selectedContexts[i].contextNumber);
    }
    await util.remove("/context/" + id, idArray);
    toast("Context Sucessfully Deleted");
    toast("Context Removed");
    // resets the array
    setSelectedContexts([]);
  };

  return (
    <div>
      <h4>Context Register:</h4>
      <ContextTable contexts={allContext} onChecked={onChecked} />
      <FAB
        name="Context"
        onAdd={onToggle}
        onEdit={onToggle}
        onRemove={() => onRemove()}
      />
      <ModalBackdrop
        header="Add to the Context Regisiter"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={onAdd}
      >
        <ContextForm onSubmit={onAdd} toggle={onToggle} />
      </ModalBackdrop>
      <br />
    </div>
  );
};

export default ContextRegister;

import ModalBackdrop from "../../common/modalBackdrop";
import FAB from "../../common/fab";
import FindsForm from "./findsAddForm";
import FindsTable from "./findsTable";
import { useEffect, useState } from "react";
import util from "../../util";
import toast from "react-hot-toast";

const FindRegister = (props: any) => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);
  const [allFind, setAllFind] = useState<any[]>([]);
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

  const id = props.project.projectID;

  // Context Get
  useEffect(() => {
    util.get("/find/" + id).then(async (result) => {
      // axios way:
      setAllFind(result?.data);
    });
  }, [isOpen, setIsOpen]);

  // Context POST
  const onAdd = async (find: any) => {
    // send to backend
    await util.post("/find/" + id, find);
    toggle();
    toast("New Find Added");
  };

  // Context EDIT --> TO DO
  //

  // Context Delete
  const removeFind = () => {
    console.log("Trying to remove find(s)");
    let idArray = [];
    for (let i = 0; i < selectedFinds.length; i += 1) {
      idArray.push(selectedFinds[i].userID);
    }
    util.remove("/find", idArray);
    toast("Find(s) Sucessfully Deleted");
  };

  return (
    <div>
      <FindsTable finds={allFind} onChecked={onChecked} />
      <FAB
        name="Find"
        onAdd={onToggle}
        /*onRemove={() => onRemove()}*/ onRemove={removeFind}
      />
      <ModalBackdrop
        header="Add Find to Regisiter"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={onAdd}
      >
        <FindsForm onSubmit={onAdd} toggle={onToggle} project={props.project} />
      </ModalBackdrop>
    </div>
  );
};
export default FindRegister;

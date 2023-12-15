import { useEffect, useState } from "react";
import TeamTable from "./table";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import AddForm from "./addForm";
import util from "../util";
import toast from "react-hot-toast";
import { Container } from "reactstrap";
import ShowDirector from "../common/showDirector";
// import EditForm from "./editForm";

const Team = () => {
  // state variables
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    util.get(`/user?limit=20&offset=${offset}`).then(async (result) => {
      // axios way:
      setUsers(result?.data);
    });
  }, [isOpen, offset]);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const addUser = async (user: any) => {
    // axios way:
    await util.post("/user", user);
    toggle();
    toast("Team Member Sucessfully Added");
  };

  const onChecked = (user: any) => {
    const existingUserIndex = selectedUsers.findIndex(
      (aSelectedUser) => aSelectedUser.number === user.number
    );
    if (existingUserIndex === -1) {
      const newSelectedUsers = selectedUsers.concat([user]);
      setSelectedUsers(newSelectedUsers);
    } else {
      const newSelectedUsers = selectedUsers.filter(
        (_item, index) => index !== existingUserIndex
      );
      setSelectedUsers(newSelectedUsers);
    }
  };

  //
  const editUsers = () => {
    console.log("Trying to edit users");
    let idArray = [];
    for (let i = 0; i < selectedUsers.length; i += 1) {
      idArray.push(selectedUsers[i].userID);
    }
    util.patch("/user", idArray);
    toast("Team Member Sucessfully Updated");
  };

  const removeUsers = () => {
    console.log("Trying to remove users");
    let idArray = [];
    for (let i = 0; i < selectedUsers.length; i += 1) {
      idArray.push(selectedUsers[i].userID);
    }
    util.remove("/user", idArray);
    toast("Team Member Sucessfully Deleted");
  };

  const next = () => {
    setOffset(offset + 20);
  };

  const prev = () => {
    setOffset(offset - 20);
  };

  return (
    <Container fluid>
      <br />
      <TeamTable
        users={users}
        onChecked={onChecked}
        onPrev={offset === 0 ? null : prev}
        onNext={users.length < 20 ? null : next}
      />
      <ShowDirector>
        <FAB
          name="Team"
          onAdd={onToggle}
          onEdit={editUsers}
          onRemove={removeUsers}
        />
      </ShowDirector>
      <ModalBackdrop
        header="Add / Edit a new Team Member"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={addUser}
        onEdit={editUsers}
      >
        <AddForm onSubmit={addUser} toggle={onToggle} />
        {/* <EditForm onSubmit={editUsers} toggle={onToggle} /> */}
      </ModalBackdrop>
    </Container>
  );
};
export default Team;

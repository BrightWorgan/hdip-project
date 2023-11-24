import { useEffect, useState } from "react";
import TeamTable from "./table";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import AddForm from "./addForm";
import util from "../util";

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

  const removeUsers = () => {
    // if (selectedUsers.length !== 0) {
    //   const newUserList = users.filter((user) => {
    //     const foundUser = selectedUsers.some((selectedUser) => {
    //       return selectedUser.number === user.number;
    //     });
    //     if (foundUser === true) {
    //       return false;
    //     }
    //     return true;
    //   });
    //   setUsers(newUserList);
    // }
    // api / axios way
    // axios.delete("http://localhost:3000/user", selectedUsers);
    // [{ userId: 123, email: "test@test.com", ...}, { userId: 434, ...}]
    // { userId: 434, ...}
    console.log("Trying to remove users");
    let idArray = [];
    for (let i = 0; i < selectedUsers.length; i += 1) {
      idArray.push(selectedUsers[i].userID);
    }
    util.remove("/user", idArray);
    //
    // if()
  };

  const next = () => {
    setOffset(offset + 20);
  };

  const prev = () => {
    setOffset(offset - 20);
  };

  return (
    <div>
      <h4>Team Members:</h4>
      <TeamTable
        users={users}
        onChecked={onChecked}
        onPrev={offset === 0 ? null : prev}
        onNext={next}
      />
      <FAB name="Team" onAdd={onToggle} onRemove={removeUsers} />
      <ModalBackdrop
        header="Add a new Team Member"
        toggle={onToggle}
        isOpen={isOpen}
        onAdd={addUser}
      >
        <AddForm onSubmit={addUser} toggle={onToggle} />
      </ModalBackdrop>
    </div>
  );
};
export default Team;

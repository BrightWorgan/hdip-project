import { useEffect, useState } from "react";
import TeamTable from "./table";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import AddForm from "./addForm";
import axios from "axios";
import util from "../util";

// old users list / pre-API
// const userList = [
//   {
//     name: "Sarah",
//     surname: "Halford",
//     number: "0834690565",
//     email: "X00192313@mytudublin.ie",
//     address: "place, street road, Rush, Co. Dublin",
//     experience: "Site Assiastant",
//     education: "Level 8",
//     certs: "Training Certs",
//     drive: "Yes",
//     position: "Supervisor",
//     site: "None",
//   },
//   {
//     name: "John",
//     surname: "Bird",
//     number: "0864695505",
//     email: "email@addresss.ie",
//     address: "place, street road, town, Co. County",
//     experience: "Experience",
//     education: "Education",
//     certs: "Training Certs",
//     drive: "NO",
//     position: "Company Position",
//     site: "Trim Castle Excavation",
//   },
//   {
//     name: "Cormac",
//     surname: "O'Sullivan",
//     number: "0867690305",
//     email: "email@addresss.ie",
//     address: "place, street road, town, Co. County",
//     experience: "Experience",
//     education: "Education",
//     certs: "Training Certs",
//     drive: "Yes",
//     position: "Company Position",
//     site: "None",
//   },
// ];

const Team = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    util.get(`/user?limit=20&offset=${offset}`).then(async (result) => {
      // fetch
      // setUsers((await result.json()) as any[]);
      //
      // axios way:
      setUsers(result.data);
    });
  }, [isOpen, offset]);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const addUser = async (user: any) => {
    // local array:
    // const newUserList = users.concat([user]);
    // setUsers(newUserList);
    //
    console.log(user);

    // axios way:
    await util.post("/user", user);
    toggle();
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

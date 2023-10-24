import { useState } from "react";
import TeamTable from "./table";
import FAB from "../common/fab";
import ModalBackdrop from "../common/modalBackdrop";
import AddForm from "./addForm";

const userList = [
  {
    name: "Sarah",
    surname: "Halford",
    number: "0834690565",
    email: "X00192313@mytudublin.ie",
    address: "place, street road, Rush, Co. Dublin",
    experience: "Site Assiastant",
    education: "Level 8",
    certs: "Training Certs",
    drive: "Yes",
    position: "Supervisor",
  },
  {
    name: "John",
    surname: "Bird",
    number: "0864695505",
    email: "email@addresss.ie",
    address: "place, street road, town, Co. County",
    experience: "Experience",
    education: "Education",
    certs: "Training Certs",
    drive: "NO",
    position: "Company Position",
  },
  {
    name: "Cormac",
    surname: "O'Sullivan",
    number: "0867690305",
    email: "email@addresss.ie",
    address: "place, street road, town, Co. County",
    experience: "Experience",
    education: "Education",
    certs: "Training Certs",
    drive: "Yes",
    position: "Company Position",
  },
];

const Team = () => {
  const [users, setUsers] = useState(userList);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onToggle = () => {
    toggle();
  };

  const addUser = (user: any) => {
    const newUserList = users.concat([user]);
    setUsers(newUserList);
    toggle();
  };

  const removeUsers = () => {
    if (selectedUsers.length !== 0) {
      // for (const user of selectedUsers){

      // }
      const newUserList = users.filter((user) => {
        const foundUser = selectedUsers.some((selectedUser) => {
          return selectedUser.number === user.number;
        });
        if (foundUser === true) {
          return false;
        }
        return true;
      });

      setUsers(newUserList);
    }
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

  return (
    <div>
      <h4>Team Members:</h4>
      <TeamTable users={users} onChecked={onChecked} />
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

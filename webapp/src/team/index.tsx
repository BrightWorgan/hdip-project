import { useState } from "react";
import TeamTable from "./table";
import FAB from "./fab";

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
  const addUser = (user) => {
    console.log(user);
    const newUserList = users.concat([user]);
    setUsers(newUserList);
  };
  return (
    <div>
      <h2>Welcome to Sheet Scribe</h2>
      <h4>For all of your Traceable Heritage needs</h4>
      <br></br>
      <h4>Team Members:</h4>
      <TeamTable users={users} />
      <FAB onAdd={addUser} />
    </div>
  );
};
export default Team;

import {
  Container,
  Button,
  Link,
  lightColors,
  darkColors,
} from "react-floating-action-button";

import { Beverage } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons/faCheckSquare";

const user = {
  name: "Sarah",
  surname: "Halford",
  number: "0000000002",
  email: "X00192313@mytudublin.ie",
  address: "place, street road, Rush, Co. Dublin",
  experience: "Site Assiastant",
  education: "Level 8",
  certs: "Training Certs",
  drive: "Yes",
  position: "Supervisor",
};

const FAB = (props) => {
  return (
    <Container>
      <Button
        href="#"
        tooltip="Delete User"
        icon="fas fa-user-slash"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
      />
      <Button
        href="#"
        tooltip="Edit User"
        icon="fas fa-user-edit"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
      />
      <Button
        href="#"
        tooltip="Add User"
        icon="fas fa-user-plus"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        onClick={() => props.onAdd(user)}
      />

      <Button
        tooltip="Menu"
        icon="fas fa-plus"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        rotate={true}
        onClick={() => alert("FAB is working!")}
      />
    </Container>
  );
};

export default FAB;

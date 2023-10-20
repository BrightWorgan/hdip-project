import {
  Container,
  Button,
  lightColors,
  darkColors,
  // @ts-ignore
} from "react-floating-action-button";

type FABProps = {
  onToggle: () => void;
  name: string;
};
const FAB = (props: FABProps) => {
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
        onClick={() => alert("Click is working!")}
      />
      <Button
        href="#"
        tooltip="Edit User"
        icon="fas fa-user-edit"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        onClick={() => alert("Click is working!")}
      />
      <Button
        href="#"
        tooltip={`Add ${props.name}`}
        icon="fas fa-user-plus"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        onClick={() => props.onToggle()}
        //onClick={() => props.onAdd(user)}
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

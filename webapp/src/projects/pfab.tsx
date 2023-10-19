import {
  Container,
  Button,
  lightColors,
  darkColors,
} from "react-floating-action-button";

const ProjectFAB = () => {
  return (
    <Container>
      <Button
        href="#"
        tooltip="Delete Project"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        icon="fas fa-trash"
      />
      <Button
        href="#"
        tooltip="Edit Project"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        icon="fas fa-edit"
      />
      <Button
        href="#"
        tooltip="Add New Project"
        styles={{
          backgroundColor: darkColors.cyan,
          color: lightColors.teal,
        }}
        icon="fas fa-plus-square"
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

export default ProjectFAB;

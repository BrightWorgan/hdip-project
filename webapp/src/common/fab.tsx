import { Container, Button } from "react-floating-action-button";

type FABProps = {
  onAdd: () => void;
  onEdit: () => void;
  name: string;
  onRemove?: () => void;
};
const FAB = (props: FABProps) => {
  return (
    <Container>
      <Button
        href="#"
        tooltip={`Delete ${props.name}`}
        icon="fas fa-trash-alt"
        className="ss-fab-button"
        onClick={() => props?.onRemove?.()}
      />
      <Button
        href="#"
        tooltip={`Edit ${props.name}`}
        icon="fas fa-edit"
        className="ss-fab-button"
        // onClick={() => alert("Comming Soon")}
        onClick={() => props.onEdit()}
      />
      <Button
        href="#"
        tooltip={`Add ${props.name}`}
        icon="fas fa-plus-square"
        className="ss-fab-button"
        onClick={() => props.onAdd()}
      />

      <Button
        tooltip="Menu"
        icon="fas fa-plus"
        className="ss-fab-button"
        rotate={true}
      />
    </Container>
  );
};

export default FAB;

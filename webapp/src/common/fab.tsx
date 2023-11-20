import { Container, Button } from "react-floating-action-button";

type FABProps = {
  onAdd: () => void;
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
        //onClick={() => alert("Click is working!")}
        onClick={() => props?.onRemove()}
      />
      <Button
        href="#"
        tooltip={`Edit ${props.name}`}
        icon="fas fa-edit"
        className="ss-fab-button"
        onClick={() => alert("Click is working!")}
      />
      <Button
        href="#"
        tooltip={`Add ${props.name}`}
        icon="fas fa-plus-square"
        className="ss-fab-button"
        onClick={() => props.onAdd()}
        // testting button workd \/
        //onClick={() => props.onAdd(user)}
      />

      <Button
        tooltip="Menu"
        icon="fas fa-plus"
        className="ss-fab-button"
        rotate={true}
        // onClick={() => alert("FAB is working!")}
      />
    </Container>
  );
};

export default FAB;

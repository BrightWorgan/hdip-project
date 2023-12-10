import { Button, ButtonGroup, Container } from "reactstrap";

const AssignmentDisplay = (props: any) => {
  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    //TO DO
  };

  return (
    <Container onSubmit={onSubmit}>
      <h2>Working</h2>
      <ButtonGroup>
        <Button></Button>
      </ButtonGroup>
    </Container>
  );
};

export default AssignmentDisplay;

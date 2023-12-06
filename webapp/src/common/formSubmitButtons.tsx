import { Button, ButtonGroup } from "reactstrap";

const FormButton = (props: any) => {
  return (
    <div>
      <ButtonGroup style={{ float: "right" }}>
        <Button color="danger" type="reset" onClick={() => props.toggle()}>
          Cancel
        </Button>
        <Button color="success" type="submit">
          Submit
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default FormButton;

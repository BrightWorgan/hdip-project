import { Input } from "reactstrap";

const YesNoOption = (props: any) => (
  <Input
    id={props.id}
    name={props.id}
    placeholder={props.placeholder}
    type="select"
  >
    <option>Yes</option>
    <option>No</option>
  </Input>
);

export default YesNoOption;

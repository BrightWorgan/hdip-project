import { Input } from "reactstrap";

const CutFillOption = (props: any) => (
  <Input
    id={props.id}
    name={props.id}
    placeholder={props.placeholder}
    type="select"
  >
    <option>Cut</option>
    <option>Fill</option>
  </Input>
);

export default CutFillOption;

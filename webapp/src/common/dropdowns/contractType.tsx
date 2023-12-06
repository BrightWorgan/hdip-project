import { Input } from "reactstrap";

const ContractTypeOption = (props: any) => (
  <Input
    id={props.id}
    name={props.id}
    placeholder={props.placeholder}
    type="select"
  >
    <option>Private</option>
    <option>Public</option>
    <option>Field School</option>
    <option>Research</option>
  </Input>
);

export default ContractTypeOption;

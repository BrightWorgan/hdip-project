import { Input } from "reactstrap";

const MaterialDropdown = (props: any) => (
  <Input
    id={props.id}
    name={props.id}
    placeholder={props.placeholder}
    type="select"
  >
    <option>Metal</option>
    <option>Wood</option>
    <option>Stone</option>
    <option>Bone</option>
    <option>Ceramic</option>
    <option>Fibre</option>
    <option>Other</option>
  </Input>
);

export default MaterialDropdown;

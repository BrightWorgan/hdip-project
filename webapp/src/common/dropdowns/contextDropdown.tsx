import { useEffect, useState } from "react";
import util from "../../util";
import { Input } from "reactstrap";

const ContextDropdown = (props: any) => {
  const [contexts, setContexts] = useState<any[]>([]);

  useEffect(() => {
    util.get("/context/" + props.projectID).then((result) => {
      setContexts(result?.data);
    });
  }, []);
  return (
    <Input
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      type="select"
    >
      {contexts.map((context) => (
        <option value={context.contextNumber}>
          {context.contextNumber + " | " + context.type}
        </option>
      ))}
    </Input>
  );
};

export default ContextDropdown;

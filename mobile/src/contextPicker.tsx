import { useEffect, useState } from "react";
import util from "./util";
import React from "react";
import Select from "./select";

const ContextPicker = (props: any) => {
  const [contexts, setContext] = useState([]);

  useEffect(() => {
    util.get("/context/" + props.project).then((result) => {
      setContext(result?.data);
    });
  }, [props.project]);

  const contextIDs = contexts.map((context: any) => context.contextNumber);
  if (contextIDs.length === 0) {
    return null;
  }
  return (
    <Select
      label="Context"
      options={contextIDs}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default ContextPicker;

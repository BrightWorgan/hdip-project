import React from "react";
import Select from "./select";

const YesNoPicker = (props: any) => {
  return (
    <Select
      label={props.label}
      options={["Yes", "No"]}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default YesNoPicker;

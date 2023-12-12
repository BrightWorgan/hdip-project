import React from "react";
import Select from "./select";

const MaterialPicker = (props: any) => {
  return (
    <Select
      label={props.label}
      options={["Metal", "wood", "Stone", "Bone", "Ceramic", "Fibre", "Other"]}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default MaterialPicker;

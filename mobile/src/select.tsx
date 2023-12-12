import { PaperSelect } from "react-native-paper-select";
import React from "react";

const Select = (props: any) => {
  const options = props.options.map((option: string, index: number) => ({
    _id: index.toString(),
    value: option.toString(),
  }));
  // [{ _id: 0, value: Yes}, { _id: 1, value: No }]
  const preselected = options.filter((opt: any) => props.value === opt.value);
  return (
    <PaperSelect
      label={props.label}
      value={props.value}
      disabled={props.disabled}
      onSelection={(value: any) => {
        props.onChange(value.text);
      }}
      arrayList={options}
      selectedArrayList={preselected}
      multiEnable={false}
    />
  );
};

export default Select;

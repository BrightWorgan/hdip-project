import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

const DatePicker = (props: any) => {
  // use state variable
  const [open, setOpen] = useState(false);

  const onDismiss = () => {
    setOpen(false);
  };

  const onConfirm = (params: any) => {
    setOpen(false);
    props.setDate(params.date);
  };

  return (
    <SafeAreaProvider>
      <View>
        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
          <TextInput
            label={props.label}
            value={props.date ? props.date.toDateString() : "no date set"}
            editable={false}
          />
        </TouchableWithoutFeedback>
        <DatePickerModal
          locale="en"
          mode="single"
          label={props.label}
          visible={open}
          onDismiss={onDismiss}
          date={props.date}
          onConfirm={onConfirm}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default DatePicker;

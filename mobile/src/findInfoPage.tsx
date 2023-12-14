import * as React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import util from "./util";

const FindInfo = (props: any) => {
  if (!props.find) {
    return null;
  }

  // use state variables
  const [text, setText] = useState("");
  const [findNumber, setFindNumber] = useState(props.find.findNumber);
  const [context, setContext] = useState(props.find.contextNumber);
  const [fillNumber, setFillNumber] = useState(props.find.fillNumber);
  const [description, setDescription] = useState(props.find.description);
  const [material, setMaterial] = useState(props.find.material);
  const [project, setProject] = useState(props.find.projectID);
  const [bagged, setBagged] = useState(props.find.bagged);
  const [date, setDate] = useState(new Date(props.find.date));

  const onSubmit = async () => {
    const paylod = {
      contextNumber: context,
      context: context,
      fillNumber: fillNumber,
      description: description,
      material: material,
      date: date,
      bagged: bagged,
    };
    await util.patch(`/find/${props.find.findNumber}`, paylod);
    props.close();
  };

  return (
    <div>
      <TextInput
        label="Context Number "
        value={context}
        editable={false}
        onChangeText={(text) => setText(text)}
        style={{ backgroundColor: "#e6e5e3" }}
      />
      <TextInput
        label="Fill Number"
        value={fillNumber}
        editable={false}
        onChangeText={(text) => setFillNumber(text)}
        style={{ backgroundColor: "#e6e5e3" }}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={{ backgroundColor: "white" }}
      />
      <TextInput
        label="Material "
        value={material}
        editable={false}
        onChangeText={(text) => setText(text)}
        style={{ backgroundColor: "#e6e5e3" }}
      />
      <TextInput
        label="Date Found"
        value={date.toDateString()}
        onChangeText={(text) => setFillNumber(text)}
        style={{ backgroundColor: "#e6e5e3" }}
      />
      <TextInput
        label="Bagged"
        value={bagged}
        onChangeText={(text) => setDescription(text)}
        style={{ backgroundColor: "#e6e5e3" }}
      />
      <Button
        icon="camera"
        mode="outlined"
        buttonColor="#73a2d1"
        textColor="white"
        onPress={() => console.log("Photo Added")}
      >
        Add Photo
      </Button>
      <Button
        /*buttonColor="#73a2d1"*/ textColor="#23232b"
        onPress={() => onSubmit()}
      >
        Save
      </Button>
    </div>
  );
};

export default FindInfo;

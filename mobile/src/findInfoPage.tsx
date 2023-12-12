import * as React from "react";
import { useState } from "react";
import { Text, TextInput, Button } from "react-native-paper";
import util from "./util";

const FindInfo = (props: any) => {
  if (!props.find) {
    return null;
  }

  // use state variables
  const [text, setText] = useState("");
  const [findNumber, setFindNumber] = useState(props.find.findNumber);
  const [conxtent, setConxtent] = useState(props.find.contextNumber);
  const [fillNumber, setFillNumber] = useState(props.find.fillNumber);
  const [description, setDescription] = useState(props.find.description);
  const [material, setMaterial] = useState(props.find.material);
  const [bagged, setBagged] = useState(props.find.bagged);
  const [date, setDate] = useState(props.find.date);

  const onSubmit = async () => {
    const paylod = {
      conxtent: conxtent,
      fillNumber: fillNumber,
      description: description,
      material: material,
      bagged: bagged,
    };
    await util.patch(`/find/${props.find.findNumber}`, paylod);
    props.close();
  };

  return (
    <div>
      <TextInput
        label="Find Number "
        value={findNumber}
        editable={false}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Context Number"
        value={conxtent}
        // editable={false}
        onChangeText={(text) => setConxtent(text)}
      />
      <TextInput
        label="Fill Number"
        value={fillNumber}
        // editable={false}
        onChangeText={(text) => setConxtent(text)}
      />
      <TextInput
        label="Description"
        value={description}
        // editable={false}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        label="Material"
        value={material}
        // editable={false}
        onChangeText={(text) => setMaterial(text)}
      />
      <TextInput
        label="Bagged"
        value={bagged}
        // editable={false}
        onChangeText={(text) => setBagged(text)}
      />
      <TextInput
        label="Date Found"
        value={date}
        editable={false}
        onChangeText={(text) => setText(text)}
      />
      <Button
        icon="camera"
        mode="outlined"
        onPress={() => console.log("Photo Added")}
      >
        Add Photo
      </Button>
      <Button onPress={() => onSubmit()}>Save</Button>
    </div>
  );
};

export default FindInfo;

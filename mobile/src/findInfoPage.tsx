import * as React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import util from "./util";
import DatePicker from "./datePicker";
import ProjectPicker from "./projectPicker";
import ContextPicker from "./contextPicker";
import YesNoPicker from "./yesNoPicker";
import MaterialPicker from "./materialPicker";

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
      <ProjectPicker onChange={setProject} value={project} disabled={true} />
      {project !== undefined ? (
        <ContextPicker
          onChange={setContext}
          value={context}
          project={project}
        />
      ) : null}
      <TextInput
        label="Find Number "
        value={findNumber}
        editable={false}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Fill Number"
        value={fillNumber}
        onChangeText={(text) => setFillNumber(text)}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <MaterialPicker
        label={"Material"}
        value={material}
        onChange={(text: any) => setMaterial(text)}
      />
      <YesNoPicker
        label="Bagged"
        value={bagged}
        onChange={(text: any) => setBagged(text)}
      />
      <DatePicker date={date} setDate={setDate} label="Date Found" />
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

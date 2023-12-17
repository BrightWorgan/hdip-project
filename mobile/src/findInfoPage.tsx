import * as React from "react";
import { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import util from "./util";
import * as ImagePicker from "expo-image-picker";
import { View, Image } from "react-native";

const FindInfo = (props: any) => {
  // use state variables
  const [text, setText] = useState("");
  const [findNumber, setFindNumber] = useState(props?.find?.findNumber);
  const [context, setContext] = useState(props?.find?.contextNumber);
  const [fillNumber, setFillNumber] = useState(props?.find?.fillNumber);
  const [description, setDescription] = useState(props?.find?.description);
  const [material, setMaterial] = useState(props?.find?.material);
  const [project, setProject] = useState(props?.find?.projectID);
  const [bagged, setBagged] = useState(props?.find?.bagged);
  const [date, setDate] = useState(new Date(props?.find?.date));
  const [photos, setPhotos] = useState<any[]>([]);
  const [change, setChange] = useState(false);
  if (!props.find) {
    return null;
  }

  useEffect(() => {
    if (!props?.find?.findNumber) {
      return;
    }
    util.get("/find/photo/" + props?.find?.findNumber).then((result) => {
      setPhotos(result?.data);
    });
  }, [props?.find?.findNumber, change]);

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

  const onCamera = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1,
      base64: true,
    });

    const uri = result?.assets?.[0].uri;
    if (!uri) {
      return;
    }

    console.log(uri);

    const payload = { uri, findNumber: props.find.findNumber };
    await util.post("/find-photo", payload);
    setChange(!change);
  };

  return (
    <View style={{ flex: 1 }}>
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
        onPress={() => onCamera()}
      >
        Add Photo
      </Button>
      <Button
        /*buttonColor="#73a2d1"*/ textColor="#23232b"
        onPress={() => onSubmit()}
      >
        Save
      </Button>
      {photos.map((photo) => (
        <Image
          source={{ uri: photo?.uri }}
          style={{ width: "100%", height: 100 }}
        />
      ))}
    </View>
  );
};

export default FindInfo;

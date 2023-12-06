import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import util from "./util";
// import logo from "./assets/logo.png";

// const uri = Image.resolveAssetSource(logo).uri;

const Login = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    // console.log(TEST);
    const token = await util.login(username, password);
    if (token) {
      props.onLogin();
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "50%",
          height: 200,
          resizeMode: "stretch",
        }}
        source={require("../assets/logo.png")}
      />
      <TextInput
        value={username}
        onChangeText={setUsername}
        label="Email"
        style={{ margin: "2%", width: "50%" }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        label="Password"
        secureTextEntry
        style={{ margin: "2%", width: "50%" }}
      />
      <Button
        mode="contained"
        style={{ width: "50%", margin: "2%" }}
        onPress={() => login()}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;

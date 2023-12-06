import React, { useState } from "react";
import Login from "./src/login";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Main = () => (
  <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      <App />
      <Toast />
    </View>
  </SafeAreaProvider>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) {
    return <h1>Logged in!</h1>;
  }
  return <Login onLogin={() => setIsLoggedIn(true)} />;
};

export default Main;

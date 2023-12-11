import React, { useState } from "react";
import Login from "./src/login";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyComponent from "./src/finds";

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
    return (
      <div>
        <h1>Logged in!</h1>;<MyComponent></MyComponent>
      </div>
    );
  }
  return <Login onLogin={() => setIsLoggedIn(true)} />;
};

export default Main;

import React, { useState } from "react";
import Login from "./src/login";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FindView from "./src/finds";
import Header from "./src/header";

const Main = () => (
  <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      <App />
    </View>
  </SafeAreaProvider>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn) {
    return (
      <div>
        <Header />
        <FindView />
      </div>
    );
  }
  return <Login onLogin={() => setIsLoggedIn(true)} />;
};

export default Main;

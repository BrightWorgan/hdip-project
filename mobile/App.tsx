import React, { useState } from "react";
import Login from "./src/login";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FindView from "./src/finds";
import Header from "./src/header";

const Main = () => (
  <SafeAreaProvider style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <App />
    </View>
  </SafeAreaProvider>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFind, setSelectedFind] = useState(null);
  if (isLoggedIn) {
    return (
      <View style={{ flex: 1 }}>
        <Header onBack={() => setSelectedFind(null)} />
        <FindView
          selectedFind={selectedFind}
          setSelectedFind={setSelectedFind}
        />
      </View>
    );
  }
  return <Login onLogin={() => setIsLoggedIn(true)} />;
};

export default Main;

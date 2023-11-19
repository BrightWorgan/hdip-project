import { useState } from "react";
import "./App.css";
import Footer from "./common/Footer";
import HeaderArea from "./common/headerArea";
import Body from "./body";
import LoginForm from "./settings/loginForm";

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const onLogin = () => {
    setLogin(true);
  };

  if (!isLoggedIn) {
    return (
      <>
        <HeaderArea />
        <LoginForm onLogin={onLogin} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <HeaderArea />
      <Body />
      <Footer />
    </>
  );
};

export default App;

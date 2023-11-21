import { useState } from "react";
import "./App.css";
import Footer from "./common/Footer";
import HeaderArea from "./common/headerArea";
import Body from "./body";
import LoginForm from "./settings/loginForm";
// import axios from "axios";
import util from "./util";

const App = () => {
  const [isLoggedIn, setLogin] = useState<any>(false);
  const onLogin = async (user: any) => {
    const res = await util.login(user.email, user.password);
    // post/login user email and password
    // user.email user.password
    console.log(user);
    if (res !== false) {
      setLogin(res);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <HeaderArea />
        <br />
        <br />
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

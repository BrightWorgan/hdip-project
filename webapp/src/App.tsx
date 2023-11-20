import { useState } from "react";
import "./App.css";
import Footer from "./common/Footer";
import HeaderArea from "./common/headerArea";
import Body from "./body";
import LoginForm from "./settings/loginForm";
import axios from "axios";

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const onLogin = async (user: any) => {
    const res = await axios.post("http://localhost:3000/login", user);
    // post/login user email and password
    // user.email user.password
    console.log(user);
    if (res.data !== false) {
      setLogin(res.data);
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

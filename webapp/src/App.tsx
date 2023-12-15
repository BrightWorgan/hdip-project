import { useState } from "react";
import "./App.css";
import Footer from "./common/Footer";
import HeaderArea from "./common/headerArea";
import Body from "./body";
import LoginForm from "./settings/loginForm";
import util from "./util";
import { Toaster } from "react-hot-toast";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

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
        <Toaster />
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
      <Toaster />
      <HeaderArea />
      <Body />
      <Footer />
    </>
  );
};

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./common/Navbar";
import "./App.css";
import Home from "./home";
import Footer from "./common/Footer";

export enum Tabs {
  Home = 0,
  Project = 1,
  Location = 2,
  Team = 3,
  Reports = 4,
  User_Profile = 5,
  Settings = 6,
}

const App = () => {
  const [tab, setTab] = useState(Tabs.Project);
  return (
    <>
      <Navbar tab={tab} onClick={setTab} />
      {tab === Tabs.Home ? <Home /> : null}

      {tab === Tabs.Project ? <h1>Project page is working</h1> : null}

      {tab === Tabs.Location ? <h1>Location page is working</h1> : null}

      {tab === Tabs.Team ? <h1>Team page is working</h1> : null}

      {tab === Tabs.Reports ? <h1>Reports page is working</h1> : null}

      {tab === Tabs.User_Profile ? <h1>User Profile page is working</h1> : null}

      {tab === Tabs.Settings ? <h1>Settings page is working</h1> : null}
      <Footer />
      {/* <Navbar tab={tab} onClick={setTab}/>
    {
      tab === Tabs.Project ? (
        <h1>Project Page is working </h1>
      ) : null  
    } */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SheetScribe</h1>
      <h3>Traceable Heritage</h3> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
};

export default App;

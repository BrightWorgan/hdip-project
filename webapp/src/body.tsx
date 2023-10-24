import "./App.css";
import { useState } from "react";
import Navbar from "./common/Navbar";
import Home from "./home";
import Team from "./team";
import Project from "./projects";
import UserProfile from "./userProfile";
import LoginDemo from "./settings";

export enum Tabs {
  Home = 0,
  Project = 1,
  Location = 2,
  Team = 3,
  Reports = 4,
  User_Profile = 5,
  Settings = 6,
}

const Body = () => {
  const [tab, setTab] = useState(Tabs.Home);
  return (
    <>
      <Navbar tab={tab} onClick={setTab} />
      {tab === Tabs.Home ? <Home /> : null}

      {tab === Tabs.Project ? <Project /> : null}

      {tab === Tabs.Location ? <h1>Location page is working</h1> : null}

      {tab === Tabs.Team ? <Team /> : null}

      {tab === Tabs.Reports ? <h1>Reports page is working</h1> : null}

      {tab === Tabs.User_Profile ? <UserProfile /> : null}

      {tab === Tabs.Settings ? <LoginDemo /> : null}
    </>
  );
};

export default Body;

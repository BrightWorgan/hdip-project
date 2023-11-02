import "./App.css";
import { useState } from "react";
import Navbar from "./common/Navbar";
import Home from "./home";
import Team from "./team";
// import Reports from "./projects/reports";
import Project from "./projects";
import UserProfile from "./userProfile";
import LoginDemo from "./settings";
// import ContextTableTab from "./projects/reports/contextTable";
// import SampleTable from "./projects/reports/contextTable";
import ComingSoon from "./projects/reports/comingSoon";

export enum Tabs {
  Home = 0,
  Project = 1,
  Location = 2,
  Team = 3,
  Reports = 4,
  User_Profile = 5,
  Settings = 6,
  Context_Table = 7,
  Finds_Table = 8,
  Samples_Table = 9,
  ComingSoon = 10,
}

const Body = () => {
  const [tab, setTab] = useState(Tabs.Home);
  return (
    <div className="ss-body">
      <Navbar tab={tab} onClick={setTab} />
      {tab === Tabs.Home ? <Home /> : null}

      {tab === Tabs.Project ? <Project /> : null}

      {/* {tab === Tabs.Location ? <h1>Location page is working</h1> : null} */}

      {tab === Tabs.Team ? <Team /> : null}

      {/* {tab === Tabs.Reports ? <Reports /> : null} */}

      {tab === Tabs.User_Profile ? <UserProfile /> : null}

      {tab === Tabs.Settings ? <LoginDemo /> : null}

      {/* {tab === Tabs.Context_Table ? <ContextTableTab /> : null}

      {tab === Tabs.Finds_Table ? <Reports /> : null}

      {tab === Tabs.Samples_Table ? <SampleTable /> : null} */}

      {tab === Tabs.ComingSoon ? <ComingSoon /> : null}
      {tab === Tabs.ComingSoon ? <ComingSoon /> : null}
    </div>
  );
};

export default Body;

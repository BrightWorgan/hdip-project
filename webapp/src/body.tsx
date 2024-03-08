import "./App.css";
import { useState } from "react";
import Navbar from "./common/Navbar";
import Team from "./team";
import Project from "./projects";
import UserProfile from "./userProfile";
// import LoginDemo from "./settings";
import ComingSoon from "./common/comingSoon";
import Dashboard from "./home/dashboard";

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
  Logout = 11,
}

const Body = (props: any) => {
  const [tab, setTab] = useState(Tabs.Home);

  const onChange = (clickedTab: Tabs) => {
    if (clickedTab !== Tabs.Logout) {
      setTab(clickedTab);
    } else {
      window.location.reload();
      props.onLogout();
    }
  };

  return (
    <div className="ss-body">
      <Navbar tab={tab} onClick={onChange} />
      {tab === Tabs.Home ? <Dashboard /> : null}

      {tab === Tabs.Project ? <Project /> : null}

      {tab === Tabs.Team ? <Team /> : null}

      {tab === Tabs.User_Profile ? <UserProfile /> : null}

      {/* {tab === Tabs.Settings ? <LoginDemo /> : null} */}

      {tab === Tabs.ComingSoon ? <ComingSoon /> : null}
    </div>
  );
};

export default Body;

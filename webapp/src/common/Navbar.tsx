import { Nav, NavItem, NavLink } from "reactstrap";
import { Tabs } from "../App";

type NavbarProps = {
  tab: Tabs;
  onClick: (tab: Tabs) => void;
};

const Navbar = (props: NavbarProps) => (
  <Nav justified id="navbar">
    <NavItem onClick={() => props.onClick(Tabs.Home)}>
      <NavLink
        className="ss-nav-link"
        active={props.tab === Tabs.Home}
        href="#"
      >
        Home
      </NavLink>
    </NavItem>
    <NavItem onClick={() => props.onClick(Tabs.Project)}>
      <NavLink href="#" active={props.tab === Tabs.Project}>
        Project
      </NavLink>
    </NavItem>
    <NavItem onClick={() => props.onClick(Tabs.Location)}>
      <NavLink href="#" active={props.tab === Tabs.Location}>
        Location
      </NavLink>
    </NavItem>
    <NavItem onClick={() => props.onClick(Tabs.Team)}>
      <NavLink href="#" active={props.tab === Tabs.Team}>
        Team
      </NavLink>
    </NavItem>
    <NavItem onClick={() => props.onClick(Tabs.Reports)}>
      <NavLink href="#" active={props.tab === Tabs.Reports}>
        Reports
      </NavLink>
    </NavItem>
    <NavItem onClick={() => props.onClick(Tabs.User_Profile)}>
      <NavLink href="#" active={props.tab === Tabs.User_Profile}>
        User Profile
      </NavLink>
    </NavItem>
    <NavItem onClick={() => props.onClick(Tabs.Settings)}>
      <NavLink href="#" active={props.tab === Tabs.Settings}>
        Settings
      </NavLink>
    </NavItem>
  </Nav>
);

export default Navbar;

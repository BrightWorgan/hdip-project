import { Nav, NavItem, NavLink } from "reactstrap";
import { Tabs } from "../body";

type NavbarProps = {
  tab: Tabs;
  onClick: (tab: Tabs) => void;
};

const Navbar = (props: NavbarProps) => {
  return (
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
      <NavItem onClick={() => props.onClick(Tabs.Team)}>
        <NavLink href="#" active={props.tab === Tabs.Team}>
          Team
        </NavLink>
      </NavItem>
      <NavItem onClick={() => props.onClick(Tabs.User_Profile)}>
        <NavLink href="#" active={props.tab === Tabs.User_Profile}>
          User Profile
        </NavLink>
      </NavItem>
      <NavItem onClick={() => props.onClick(Tabs.Logout)}>
        <NavLink href="#" active={props.tab === Tabs.Logout}>
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navbar;

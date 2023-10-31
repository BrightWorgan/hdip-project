import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Tabs } from "../body";
import { useState } from "react";

type NavbarProps = {
  tab: Tabs;
  onClick: (tab: Tabs) => void;
};

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Nav tabs justified id="navbar">
        <NavbarToggler onClick={toggle} />
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
        {/* <NavItem onClick={() => props.onClick(Tabs.Location)}>
          <NavLink href="#" active={props.tab === Tabs.Location}>
            Location
          </NavLink>
        </NavItem> */}
        <NavItem onClick={() => props.onClick(Tabs.Team)}>
          <NavLink href="#" active={props.tab === Tabs.Team}>
            Team
          </NavLink>
        </NavItem>
        {/* <NavItem onClick={() => props.onClick(Tabs.Reports)}>
          <NavLink href="#" active={props.tab === Tabs.Reports}>
            Reports
          </NavLink>
        </NavItem> */}
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
        <NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Reports
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => props.onClick(Tabs.Settings)}>
                Context Register
              </DropdownItem>
              <DropdownItem>Finds Register</DropdownItem>
              <DropdownItem>Sample Register</DropdownItem>
              <DropdownItem>Wood Register</DropdownItem>
              <DropdownItem>Bone Register</DropdownItem>
              <DropdownItem>Animal Bone Register</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;

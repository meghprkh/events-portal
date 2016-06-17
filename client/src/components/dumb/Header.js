import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'

const Header = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Events Portal</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href='#'>All Events</NavItem>
        <NavItem href='#'>All Groups</NavItem>
      </Nav>
      {props.loggedInAs == 'none' &&
        <Nav pullRight>
          <NavItem href='#/user/login'>Login</NavItem>
        </Nav>}
      {props.loggedInAs == 'user' &&
        <Nav pullRight>
          <NavItem href='#'>My Groups</NavItem>
          <NavItem href='#'>My Events</NavItem>
          <NavItem href='#/logout'>Logout</NavItem>
        </Nav>}
      {props.loggedInAs == 'group' &&
        <Nav pullRight>
          <NavItem href='#'>Group Page</NavItem>
          <NavItem href='#'>Create/Update Event</NavItem>
          <NavItem href='#'>Members</NavItem>
          <NavItem href='#/logout'>Logout</NavItem>
        </Nav>}
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

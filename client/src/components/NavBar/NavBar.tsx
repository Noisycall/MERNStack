import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
class NavBar extends Component<any, any> {
  render() {
    return (
      <Navbar className="mb-5" variant="dark" bg="dark" expand="md">
        <Navbar.Brand>React Shopping List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link>Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;

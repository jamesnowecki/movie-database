import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

const NavBar = (props) => {
  const {updateSearch, updateYear} = props;

  const [searchText, updateSearchText] = useState("alien");
  const [yearFilter, updateYearFilter] = useState("");

  const setSearchTerms = () => {
    updateSearch(searchText);
    updateYear(yearFilter);
  }

  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Film title" className="mr-sm-2" onChange={event => updateSearchText(event.target.value)} />
          <FormControl type="text" placeholder="Filter by year" className="mr-sm-2" onChange={event => updateYearFilter(event.target.value)}/>
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    
      <input type="text" placeholder="Film Title" onChange={event => updateSearchText(event.target.value)}/>
      <input type="text" placeholder="Year" onChange={event => updateYearFilter(event.target.value)}/>

      <button onClick={() => setSearchTerms()}>Search</button>
    </>
  );
};

export default NavBar;

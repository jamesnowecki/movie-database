import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';

const NavBar = (props) => {
  const {updateSearch, updateYear} = props;

  const [searchText, updateSearchText] = useState("alien");
  const [yearFilter, updateYearFilter] = useState("");

  const setSearchTerms = () => {
    updateSearch(searchText);
    updateYear(yearFilter);
  }

  return (
    <Navbar bg="dark" sticky="top" varient="dark" expand="lg"  className={styles.navbar}>
        <Form inline >
          <FormControl type="text" placeholder="Film title" className="mr-sm-2" onChange={event => updateSearchText(event.target.value)} />
          <FormControl type="text" placeholder="Filter by year" className="mr-sm-2" onChange={event => updateYearFilter(event.target.value)}/>
          <Button variant="outline-success" onClick={() => setSearchTerms()}>Search</Button>
        </Form>
    </Navbar>
  );
};

export default NavBar;

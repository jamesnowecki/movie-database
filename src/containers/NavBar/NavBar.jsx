import React, { useState } from "react";
import styles from "./NavBar.module.scss";

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
      <p>Search:</p>
      <input type="text" placeholder="Film Title" onChange={event => updateSearchText(event.target.value)}/>
      <input type="text" placeholder="Year" onChange={event => updateYearFilter(event.target.value)}/>

      <button onClick={() => setSearchTerms()}>Search</button>
    </>
  );
};

export default NavBar;

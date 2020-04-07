import React, { useState } from "react";
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
  const {updateSearch} = props;

  const [searchText, updateSearchText] = useState("alien")

  return (
    <>
      <p>Search:</p>
      <input type="text" placeholder="Film Title" onChange={event => updateSearchText(event.target.value)}/>
      <button onClick={() => updateSearch(searchText)}>Search</button>
    </>
  );
};

export default NavBar;

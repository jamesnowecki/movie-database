import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
  const {handleInput} = props;
  return (
    <>
      <p>Search:</p>
      <input type="text" placeholder="Film Title" onChange={handleInput}/>
    </>
  );
};

export default NavBar;

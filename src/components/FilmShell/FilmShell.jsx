import React from "react";
import styles from "./FilmShell.module.scss";

const FilmShell = ({film}) => {
  const {Title, Year, Director, Poster} = film;
  return (
    <>
      <h2>{Title}</h2>
      <img src={Poster} alt={`${Title} poster`} />
    <p>{Year}</p>
    <p>{Director}</p>
    </>
  );
};

export default FilmShell;

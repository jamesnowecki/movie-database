import React from "react";
import styles from "./FilmExtensionInfo.module.scss";

const FilmExtensionInfo = ({film}) => {
  const { Director, Rated, Plot, Genre } = film;
  return (
    <>
      <p>Genre: {Genre}</p>
      <p>Director: {Director}</p>
      <p>Rated: {Rated}</p>
      <p>{Plot}</p>
    </>
  );
};

export default FilmExtensionInfo;

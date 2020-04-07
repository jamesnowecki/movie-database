import React from "react";
import styles from "./FilmExtensionInfo.module.scss";

const FilmExtensionInfo = ({film}) => {
  const { Director } = film;
  return (
    <>
      <p>{Director}</p>
    </>
  );
};

export default FilmExtensionInfo;

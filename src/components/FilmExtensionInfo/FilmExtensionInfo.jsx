import React from "react";
import styles from "./FilmExtensionInfo.module.scss";
import { Card } from "react-bootstrap";

const FilmExtensionInfo = ({ film }) => {
  const { Director, Rated, Plot, Genre } = film;
  return (
    <>
      <Card.Text>Genre: {Genre}</Card.Text>
      <Card.Text>Director: {Director}</Card.Text>
      <Card.Text>Rated: {Rated}</Card.Text>
      <Card.Text>{Plot}</Card.Text>
    </>
  );
};

export default FilmExtensionInfo;

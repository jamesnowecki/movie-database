import React, { useState } from "react";
import styles from "./FilmShell.module.scss";
import FilmExtensionInfo from "../FilmExtensionInfo/FilmExtensionInfo";
import {Card, Button } from "react-bootstrap"


const FilmShell = ({film}) => {
  const {Title, Year, Poster, imdbID} = film;

  const [fullFilm, updateFullFilm] = useState("");
  const [extensionRequested, toggleExtensionRequested] = useState(false);


  const getTheFilmFullObj = (id) => {
    fetch(`https://www.omdbapi.com/?apikey=23947ab0&i=${id}`)
          .then(result => result.json())
          .then(result => {
              updateFullFilm(result);
              toggleExtensionRequested(!extensionRequested);
          })
          .catch(error => {
              console.log(error)
          });
  }

  const extensionJSX = extensionRequested ? <FilmExtensionInfo film={fullFilm}/>: null;

  return (
    <>
    <Card style={ {width: '18rem'} } bg='dark' text='light' border="success">
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
           <Card.Title>{Title}</Card.Title>
           <Card.Text>{Year}</Card.Text>
          <Button variant="outline-success" onClick={() => getTheFilmFullObj(imdbID)}>More info</Button>
          {extensionJSX}
        </Card.Body>
    </Card>
      {/* <h2>{Title}</h2>
      <img src={Poster} alt={`${Title} poster`} />
      <p>{Year}</p>
      <button onClick={() => getTheFilmFullObj(imdbID)}> More info</button>
      {extensionJSX}*/}
    </> 
  );
};

export default FilmShell;

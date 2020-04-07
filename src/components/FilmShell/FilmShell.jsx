import React, { useState } from "react";
import styles from "./FilmShell.module.scss";
import FilmExtensionInfo from "../FilmExtensionInfo/FilmExtensionInfo";


const FilmShell = ({film}) => {
  const {Title, Year, Poster} = film;

  const [fullFilm, updateFullFilm] = useState("");
  const [extensionRequested, toggleExtensionRequested] = useState(false);


  const getTheFilmFullObj = () => {
    fetch(`http://www.omdbapi.com/?apikey=23947ab0&t=${Title}`)
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
      <h2>{Title}</h2>
      <img src={Poster} alt={`${Title} poster`} />
      <p>{Year}</p>
      <button onClick={() => getTheFilmFullObj()}> More info</button>
      {extensionJSX}
    </>
  );
};

export default FilmShell;

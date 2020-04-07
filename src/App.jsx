import React from 'react';
import styles from './App.module.scss';
import { useState, useEffect } from 'react';
import NavBar from "./containers/NavBar";
import FilmShell from "./components/FilmShell";


const App = () => {

  const [film, updateFilm] = useState({});
  const [userSearch, updateSearch] = useState("alien");

  useEffect(() => {getTheFilmByTitle()}, []);

  const getTheFilmByTitle = () => {
    fetch("http://www.omdbapi.com/?apikey=23947ab0&t=alien")
          .then(result => result.json())
          .then(result => {
              console.log(result);
              updateFilm(result);
          })
          .catch(error => {
              console.log(error)
          });
  }

  return (
    <div className={styles.app}>
      <h1>NotFlix</h1>
    <NavBar handleInput={}/>
    <FilmShell film={film}/>
    </div>
  );
}

export default App;

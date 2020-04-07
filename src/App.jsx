import React from 'react';
import styles from './App.module.scss';
import { useState, useEffect } from 'react';
import NavBar from "./containers/NavBar";
import FilmShell from "./components/FilmShell";


const App = () => {

  const [films, updateFilm] = useState([]);
  const [userSearch, updateSearch] = useState("alien");
  const [year, updateYear] = useState("");

  useEffect(() => {getTheFilmBySearch()}, [userSearch, year]);

  const getTheFilmBySearch = () => {
    fetch(`https://www.omdbapi.com/?apikey=23947ab0&s=${userSearch}&y=${year}`)
          .then(result => result.json())
          .then(result => {
            let searchArray = result.Search
              updateFilm(searchArray);
          })
          .catch(error => {
              console.log(error)
          });
  }

  return (
    <div className={styles.app}>
      <h1>NotFlix</h1>
    <NavBar updateSearch={updateSearch} updateYear={updateYear} />
    {films.map(film => <div><FilmShell film={film}/></div>)}
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';
import { useState, useEffect, useCallback } from 'react';
import NavBar from "./containers/NavBar";
import FilmShell from "./components/FilmShell";

const App = () => {

  const [films, updateFilm] = useState([]);
  const [userSearch, updateSearch] = useState("alien");
  const [year, updateYear] = useState("");

  const getTheFilmBySearch = useCallback(() => {
    fetch(`https://www.omdbapi.com/?apikey=23947ab0&s=${userSearch}&y=${year}`)
          .then(result => result.json())
          .then(result => {
            let searchArray = result.Search
              updateFilm(searchArray);
          })
          .catch(error => {
              console.log(error)
          });
  }, [userSearch, year]);

  useEffect(() => {getTheFilmBySearch()}, [userSearch, year, getTheFilmBySearch]);

  return (
    <div className={styles.app}>
      <h1>NotFlix</h1>
    <NavBar updateSearch={updateSearch} updateYear={updateYear} />
      <div className={styles.filmSearch}>
      {films.map(film => <div key={film.imdbID}><FilmShell film={film}/></div>)}
      </div>
    </div>
  );
}

export default App;

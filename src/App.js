// React
import React, { useState, useEffect } from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import MovieList from './MovieList/MovieList';

function App() {

  const [movies, setMovies] = useState([
    {
      "Title": "Avengers: Endgame",
      "Year": "2019",
      "imdbID": "tt4154796",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  ])

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList
          movies={movies}
        />
      </div>
    </div>
  );
}

export default App;

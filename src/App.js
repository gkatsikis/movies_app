// React
import React, { useState, useEffect } from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import MovieList from './MovieList/MovieList';
import MovieListHeading from './MovieListHeading/MovieListHeading';
import SearchBox from './SearchBox/SearchBox';

function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading 
          heading="Movies"
        />
        <SearchBox 
          searchValue={searchValue}
          setSearchValue={setSearchValue} 
        />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
        />
      </div>
    </div>
  );
}

export default App;

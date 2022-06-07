// React
import React, { useState, useEffect } from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import MovieList from './MovieList/MovieList';
import MovieListHeading from './MovieListHeading/MovieListHeading';
import SearchBox from './SearchBox/SearchBox';
import AddFavorites from './AddFavorites/AddFavorites';
import RemoveFavorites from './RemoveFavorites/RemoveFavorites';

function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1c035d10`

    const response = await fetch(url)
    const responseJSON = await response.json()

    if(responseJSON.Search) {
      setMovies(responseJSON.Search)
    }
  }

  useEffect(()=> {
    getMovieRequest(searchValue)
  }, [searchValue])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))
  }

  const AddFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    )
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
  }

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
          handleFavoritesClick={AddFavoriteMovie}
          favoriteComponent={AddFavorites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </div>
  );
}

export default App;

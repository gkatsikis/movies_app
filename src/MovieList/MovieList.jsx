import './MovieList.css'

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent

  return ( 
    <>
      {props.movies.map((movie, idx) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="movie poster" />
          <div 
            onClick = {() => props.handleFavoritesClick(movie)} className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />  
          </div>
        </div>
      ))}
    </>
   );
}
 
export default MovieList;
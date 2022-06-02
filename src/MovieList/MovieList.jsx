import './MovieList.css'

const MovieList = (props) => {
  return ( 
    <>
      {props.movies.map((movie, idx) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="movie poster" />
        </div>
      ))}
    </>
   );
}
 
export default MovieList;
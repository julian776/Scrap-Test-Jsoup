import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import getMovies from "../utils/getMovies";
import URL from "../utils/URL";

function MovieList(props) {

  const params = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      console.log("param: " + params.id)
      console.log(`${URL}/section/${params.id}`)
      fetch(`${URL}/section/${params.id}`)
      .then((data) => data.json())
      .then(algo => {
        console.log(algo[0].movies)
        let lista = Object.values(algo[0].movies)
        setMovies([...movies, ...lista])
        console.log(movies)
      })
    } catch (e) {
      console.log("Error in getMopveis")
    }
  }, [])

  console.log(movies)
  
  return (
    <div className="movie-list">
      {movies ? <ul>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-container">
              <img className="cover" src={movie.url_image} alt={movie.name} />
              <h6 className="title">{movie.name}</h6>
              <button className='button-movie' onClick={() => {window.location.replace(movie.url_video)}}>Ver</button>
            </div>
          );
        })}
      </ul> : ""}
    </div>
  );
}

export default MovieList;

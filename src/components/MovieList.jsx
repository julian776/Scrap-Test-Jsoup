import React from "react";
import { useSelector } from "react-redux";

function MovieList() {
  const state = useSelector(state => state.movies)
  console.log(state)
  const movies = Object.values(state["movies"])
  
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
      {state["isLoading"] ? <h3>Cargando</h3> : ""}
      {state["error"] ? <h3>Error en las peliculas</h3> : ""}
    </div>
  );
}

export default MovieList;

/*
const movies = [
  {
    link: "//apialfa.tomatomatela.com/ir/player.php?h=a3FwYW05dkllMFg0d1hha1BOdVJGNWIxMisyZ2t4UkNjazUwTG52eUw3amoycHJsN2RPNzIxVlExREdZaW5VWm9yWFdPNmF4dWxzYkZRRFdVRlN4MytScmpsUDU2NDI4cUVCL2NsYlkvcVovb2ZsK0d4TEVOMHJob0dGUVNXdXM0dUZORk15SktaM3c2QXh0eXZXdzhYN055N1gxOUpkbHh1N1FHWUQzOTFtS2ZmUXcyenZmZG1CbE12SU5JQkhHZ254YTBQSWtXNmlZOWlQVXVBcmJDdUd6ckxWWjc1MnZWMWRpNWJoQXhoRXk1eUVRK3RmUUpnT1pmckZtNzRQOHZvV3hGWFJxL0pQeE93ZUNiNnl0ZWY0eTFJR3BEb0ZWT2NsM0xia2dHWUJHUTZJbE1XOEVMRFhHRUxmSXd4bmtEZXFCdHNCT2xtRUk0U0pML0ZDUmV3PT0",
    image:"https://cuevana3.io/wp-content/uploads/2022/01/el-buen-patron-53512-poster-200x300.jpg",
    year: 2021,
    title: "Hola soy la pelicula",
  },
];
*/

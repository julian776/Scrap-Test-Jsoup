import React from 'react';
import { useDispatch } from 'react-redux';
import { moviesFailed, moviesLoad, moviesLoading } from '../actions/actionsMovies';
import URL from './URL';
/*
async function getMovies() {
    dispatch(moviesLoading())
    try {
      const response =  await fetch(`${URL}/section/${params.id}`)
      .then(data => data.json())
      const movies =  await response[0].movies
      dispatch(moviesLoad(movies))
    } catch (e) {
      dispatch(moviesFailed())
    }
}
*/
//export default getMovies

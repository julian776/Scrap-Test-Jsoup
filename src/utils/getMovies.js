import React from 'react';
import { useDispatch } from 'react-redux';
import { moviesFailed, moviesLoad, moviesLoading } from '../actions/actionsMovies';
import URL from './URL';

async function getMovies(id) {
    console.log("tengo este "+id)
    const dispatch = useDispatch()
    dispatch(moviesLoading())
    console.log("pase")
    
    try {
        const response = await fetch(`${URL}/section/${id}`)
        const data = await response.json()
        const movies = data[0].movies
        console.log(movies)
        dispatch(moviesLoad(movies))
    } catch (e) {
        console.log("entre aca")
        dispatch(moviesFailed())
    }
}

export default getMovies

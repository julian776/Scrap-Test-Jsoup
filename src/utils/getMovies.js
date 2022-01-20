import React from 'react';
import { useDispatch } from 'react-redux';
import { moviesFailed, moviesLoad, moviesLoading } from '../actions/actionsMovies';
import URL from './URL';

async function getMovies() {

    const dispatch = useDispatch()
    
    dispatch(moviesLoading())

    try {
        const response = await fetch(`${URL}/action`)
        const data = await response.json()
        const movies = data[0].movies
        dispatch(moviesLoad(movies))
    } catch (e) {
        dispatch(moviesFailed())
    }
}

export default getMovies

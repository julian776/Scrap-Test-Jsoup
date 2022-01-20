import React from 'react';
import { useDispatch } from 'react-redux';
import { moviesFailed, moviesLoad } from '../actions/actionsMovies';
import URL from './URL';

async function getMovies() {

    const dispatch = useDispatch()
    
    dispatch(moviesLoad())

    try {
        const data = await fetch(`${URL}/action`)
        .then(response => response.json())
        dispatch(moviesLoad(data.movies))
        console.log(data.map((o) => {console.log(o.movies)}))
    } catch (e) {
        dispatch(moviesFailed())
    }
}

export default getMovies

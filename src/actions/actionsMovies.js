import { LOAD_SUCCESS, LOADING, FAILURE } from "../actions/actionTypes";

export const moviesLoad = (listMovies) => {
    return {
        type:LOAD_SUCCESS,
        payload: {
            movies: listMovies
        }
    }
}

export const moviesLoading = () => {
    return {
        type: LOADING
    }
}

export const moviesFailed = () => {
    return {
        type: FAILURE,
    }
}
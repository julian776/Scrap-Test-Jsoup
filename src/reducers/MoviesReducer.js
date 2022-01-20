import { LOAD_SUCCESS, LOADING, FAILURE } from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    movies: null,
    error: null
}

const MoviesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {...state,
                isLoading:true
                }
        case LOAD_SUCCESS:
            return {...state,
                isLoading: false,
                movies: action.payload.movies
            }
        case FAILURE:
            return {...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}

export default MoviesReducer
import { combineReducers } from 'redux'
import MoviesReducer from '../reducers/MoviesReducer'

const rootReducer = () => {
  return combineReducers(
    {
      movies: MoviesReducer
    }
  )
}

export default rootReducer

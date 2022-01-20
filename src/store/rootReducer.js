import { combineReducers } from 'redux'
import MoviesReducer from '../reducers/MoviesReducer'
import SectionsReducer from '../reducers/SectionsReducer'

const rootReducer = () => {
  return combineReducers(
    {
      movies: MoviesReducer,
      sections: SectionsReducer
    }
  )
}

export default rootReducer

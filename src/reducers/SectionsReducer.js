import { SECTIONS_LOADING, SECTIONS_SUCCESS, SECTIONS_FAILURE } from "../actions/actionTypes"

const initialState = {
    sections: [],
    isLoading: false,
    error: false
}

function SectionsReducer(state = initialState , action){
    switch (action.type) {
        case SECTIONS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case SECTIONS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                sections: action.payload.sections
            }
        case SECTIONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            } 
        default:
            return state
    }
}

export default SectionsReducer
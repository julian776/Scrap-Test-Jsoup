import { SECTIONS_LOADING, SECTIONS_SUCCESS, SECTIONS_FAILURE } from "../actions/actionTypes"

export const sectionsLoading = () => {
    return {
        type: SECTIONS_LOADING
    }
}

export const sectionsLoaded = (sections) => {
    return {
        type: SECTIONS_SUCCESS,
        payload: {
            sections: sections
        }
    }
}

export const sectionsFailure = () => {
    return {
        type: SECTIONS_FAILURE,
    }
}
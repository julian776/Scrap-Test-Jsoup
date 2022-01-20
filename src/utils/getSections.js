import { useDispatch } from 'react-redux';
import { sectionsFailure, sectionsLoaded, sectionsLoading } from '../actions/actionsSections';
import URL from './URL';

async function getSections() {
    const dispatch = useDispatch()
    dispatch(sectionsLoading())
    try {
        const response = await fetch(`${URL}/sections`)
        const data = await response.json()
        dispatch(sectionsLoaded(data))
    }catch(e){
        dispatch(sectionsFailure())
    }
}

export default getSections
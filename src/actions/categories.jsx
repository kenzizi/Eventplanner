import axios from 'axios'
import { GET_CATEGORIES,GET_REGIONS } from './types';




export const getCategories = () => async dispatch => {

    try {
    const res = await axios.get('http://localhost:4000/api/categories/')
    dispatch({
        type :GET_CATEGORIES,
        payload : res.data
    })
        
    } catch (err) {
        console.log('error in categories api')
    }
}
export const getRegions = () => async dispatch => {

    try {
    const res = await axios.get('http://localhost:4000/api/categories/')
    dispatch({
        type :GET_REGIONS,
        payload : res.data
    })
        
    } catch (err) {
        console.log('error in categories api')
    }
}


import {GET_CATEGORIES} from '../actions/types'

const initialstate = []
const CategoriesReducer = (state =initialstate,{type,payload}) => {
    switch (type) {
        case GET_CATEGORIES : 
            return payload ;
        default : return state
    }
}
export default CategoriesReducer
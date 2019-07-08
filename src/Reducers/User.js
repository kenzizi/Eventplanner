import {GETUSER_BYID} from "../actions/types"


const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    
    
    
    case GETUSER_BYID : 
        state=[]
        return state.concat(payload)
        

    default:
        return state
    }
}
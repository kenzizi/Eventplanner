import axios from 'axios'
import {GETUSER_BYID} from "./types"


export const getUserbyID = (id) => async dispatch => {
    const config = {
        headers :{
            'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.get(`http://localhost:4000/api/users/${id}`)
        dispatch ({
            type : GETUSER_BYID, 
            payload :res.data
        })
        console.log('from dispatch',res.data) 
    } catch (err) {
        console.log('get', err)
    }

}


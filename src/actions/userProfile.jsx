import {UPDATE_PROFILE} from './types'
import axios from 'axios'
import {loadUser} from '../actions/auth'
import store from '../store'


export const updateProfile = (payload) => async dispatch => {
    console.log(payload,"the paylaod")
    const config = {
        headers : {
            'Content-Type' : 'application/json',
           
        }
    }


        const formData = new FormData()
        formData.append('imageUp',payload.avatar)
        try {
            if(typeof(payload.avatar)==='object'){
                const res1 = await axios.post ('http://localhost:4000/api/profiles/upload/image',formData,config); 
                 payload.avatar= res1.data.filePath
                console.log('image changed')
            }
            const body = JSON.stringify(payload);
    
            const res2 = await axios.put (`http://localhost:4000/api/profiles/updateprofile/${payload.id}`,body,config); 
            dispatch({
                type : UPDATE_PROFILE,
                payload : res2.data
            });

            store.dispatch(loadUser())        
        
        } catch (err) {
           console.log('failed zab')
        }
    
  
 
}

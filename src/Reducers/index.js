import {combineReducers} from 'redux'
import auth from './auth'
import event from './event'
import Todays from './Todays'
import Upcoming from './Upcoming'
import SearchFilter from './SearchFilter'
import categories from './Categories'
import alert from './alert'
import user from './User'


export default combineReducers({
    auth,
    event,
    Todays,
    Upcoming,
    SearchFilter,
    categories,
    alert,
    user
});
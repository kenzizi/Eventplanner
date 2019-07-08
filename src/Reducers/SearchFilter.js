import { SET_SEARCH_INPUT } from '../actions/types';


 const SearchFilter = (state = "", action) => {
    if (action.type === SET_SEARCH_INPUT) {
      return action.payload;
    }
    return state;
  };
  export default SearchFilter
import { ADD_FAVORITE } from '../actions/types';


//maybe able to delete

export default function(state, action) {
    switch(action.type) {
        case ADD_FAVORITE: 
            return action.payload;
        default:
            return state;
    }
}
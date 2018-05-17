import { FETCH_COCKTAIL } from '../actions/types';

export default function(state={}, action) {
    switch(action.type) {
        case FETCH_COCKTAIL:
            return action.payload;
        default:
            return state; 
    }
}
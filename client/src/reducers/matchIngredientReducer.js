import { MATCH_INGREDIENTS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case MATCH_INGREDIENTS:
            return [...action.payload] 
        default:
            return state;
    }
}
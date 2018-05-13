import { FETCH_COCKTAILS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COCKTAILS:
            return [
                ...state,
                ...action.payload
            ] 
        default:
            return state;
    }
}
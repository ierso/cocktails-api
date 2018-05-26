import { FETCH_SAVED_COCKTAILS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SAVED_COCKTAILS:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}
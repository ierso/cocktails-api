import { FETCH_INGREDIENTS } from './types';
import { MATCH_INGREDIENTS } from './types';
import { findMatches } from '../helpers';
import axios from 'axios';

const ROOT_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const fetchIngredients = () => async dispatch => {
    const res = await axios.get(`${ROOT_URL}list.php?i=list`);
    dispatch({ type: FETCH_INGREDIENTS, payload: res.data.drinks });
}

export const matchIngredients = (searchInput, array) => dispatch => {
    const res = findMatches(searchInput, array);
    dispatch({ type: MATCH_INGREDIENTS, payload: res })
}
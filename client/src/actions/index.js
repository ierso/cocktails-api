import { 
    FETCH_COCKTAIL, 
    FETCH_COCKTAILS, 
    FETCH_INGREDIENTS,
    FETCH_SAVED_COCKTAILS, 
    FETCH_USER, 
    MATCH_INGREDIENTS 
} from './types';

import { findMatches, returnMax } from '../helpers';
import axios from 'axios';

const ROOT_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const addToFavorites = (cocktailData) => async dispatch => {
    await axios.post('/cocktails', cocktailData);
}

export const fetchIngredients = () => async dispatch => {
    const res = await axios.get(`${ROOT_URL}list.php?i=list`);
    dispatch({ type: FETCH_INGREDIENTS, payload: res.data.drinks });
}

export const fetchCocktails = (ingredient) => async dispatch => {
    const res = await axios.get(`${ROOT_URL}filter.php?i=${ingredient}`);
    dispatch({ type: FETCH_COCKTAILS, payload: res.data.drinks });
}

export const fetchCocktail = (cocktailId) => async dispatch => {
    const res = await axios.get(`${ROOT_URL}lookup.php?i=${cocktailId}`);
    console.log(res)
    dispatch({ type: FETCH_COCKTAIL, payload: res.data.drinks[0] });
}

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/verify');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchFavorites = () => async dispatch => {
    const res = await axios.get('/cocktails');
    console.log(res.data);
    dispatch({ type: FETCH_SAVED_COCKTAILS, payload: res.data});
}

export const fetchSavedCocktail = (cocktailId) => async dispatch => {
    
}

export const matchIngredients = (searchInput, array) => dispatch => {
    const maxNum = 5;
    let res = findMatches(searchInput, array);
    if (res.length > maxNum) {
        res = returnMax(maxNum, res)
    }
    dispatch({ type: MATCH_INGREDIENTS, payload: res })
}
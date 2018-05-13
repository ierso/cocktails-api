import { combineReducers } from 'redux';
import ingredientReducer from './ingredientReducer';
import matchIngredientReducer from './matchIngredientReducer';
import fetchCocktailsReducer from './fetchCocktailsReducer';

export default combineReducers({
    ingredients: ingredientReducer,
    matchIngredients: matchIngredientReducer,
    cocktails: fetchCocktailsReducer
})
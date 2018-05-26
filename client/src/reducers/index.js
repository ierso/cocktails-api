import { combineReducers } from 'redux';
import authReducer from './fetchUserReducer';
import fetchCocktail from './fetchCocktailReducer';
import fetchCocktailsReducer from './fetchCocktailsReducer';
import fetchSaved from './fetchSavedReducer';
import ingredientReducer from './ingredientReducer';
import matchIngredientReducer from './matchIngredientReducer';

export default combineReducers({
    auth: authReducer,
    ingredients: ingredientReducer,
    matchIngredients: matchIngredientReducer,
    cocktails: fetchCocktailsReducer,
    cocktail: fetchCocktail,
    favorites: fetchSaved
})
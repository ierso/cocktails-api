import { combineReducers } from 'redux';
import fetchCocktail from './fetchCocktailReducer';
import fetchCocktailsReducer from './fetchCocktailsReducer';
import ingredientReducer from './ingredientReducer';
import matchIngredientReducer from './matchIngredientReducer';

export default combineReducers({
    ingredients: ingredientReducer,
    matchIngredients: matchIngredientReducer,
    cocktails: fetchCocktailsReducer,
    cocktail: fetchCocktail
})
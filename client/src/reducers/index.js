import { combineReducers } from 'redux';
import ingredientReducer from './ingredientReducer';
import matchIngredientReducer from './matchIngredientReducer';

export default combineReducers({
    ingredients: ingredientReducer,
    matchIngredients: matchIngredientReducer
})
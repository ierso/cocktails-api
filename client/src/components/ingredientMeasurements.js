import React from 'react';

export default function(props) {
    const cocktail = props.cocktail;
    const ingredients = [];
    const measurements = [];
    Object.keys(cocktail).forEach(function(key,index) {
        if (key.toString().startsWith('strIngredient')) {
            if (cocktail[key].length > 1) {
                ingredients.push(cocktail[key]);
            }
        }
        if (key.toString().startsWith('strMeasure')) {
            if (cocktail[key].length > 1) {
                measurements.push(cocktail[key]);
            }
        } 
    });
    return (
        ingredients.map(function(value, index){
            return(
                <div key={index}>
                    <h3>{value} : {measurements[index]}</h3>
                </div>
            )
        })
    )
}
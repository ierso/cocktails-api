import React from 'react';
import styles from './ingredientMeasurements.css';

export default function(props) {
    const cocktail = props.cocktail;
    const ingredients = [];
    const measurements = [];
    Object.keys(cocktail).forEach(function(key,index) {
      if (key.toString().startsWith('strIngredient')) {
        if (cocktail[key] !== null && cocktail[key].length > 1) {                
          ingredients.push(cocktail[key]);
        }
      }
      if (key.toString().startsWith('strMeasure')) {
        if (cocktail[key] !== null && cocktail[key].length > 1) {
          measurements.push(cocktail[key]);
        }
      } 
    });
    return (
      <div className={ styles.wrapper }>
        <h2 className={styles.title}>Instructions</h2>
        <ul className={ styles.list }>
        {
          ingredients.map(function(value, index){
            return(
              <li key={index} className={ styles.listItem }>
                {value} : <span className={ styles.measurement }>{measurements[index]}</span>
              </li>
            )
          })
        }
        </ul>
      
      </div>
    )
}
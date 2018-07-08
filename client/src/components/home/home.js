import React from 'react';
import styles from './home.css';
import IngredientSearch from '../../containers/ingredientSearch/ingredientSearch';
import { isMobile } from 'react-device-detect';

export default () => {

  const renderDesktopHome =  () => {
    return (
      <div className={ styles.wrapper }>
        <h2 className={ styles.title }>Welcome to Nights Drink.</h2>
        <p className={ styles.message }>
          Choose a favorite ingredient and we'll help you find a cocktail you may like. 
          Once you find a cocktail to your liking, just log in and add to your favorites.
        </p>
      </div>  
    )
  }

  const renderMobileHome = () => {
    return (
      <div className={ styles.wrapper }>
        <h2 className={ styles.title }>Welcome to Nights Drink.</h2>
        <p className={ styles.message }>
          Choose a favorite ingredient and we'll help you find a cocktail you may like. 
          Once you find a cocktail to your liking, just log in and add to your favorites.
        </p>
        <IngredientSearch /> 
      </div> 
      
    )
  }

  const renderHome = () => {
    if (isMobile) {
      return renderMobileHome();
    }
    return renderDesktopHome();
  }

  return renderHome();
}
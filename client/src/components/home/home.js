import React from 'react';
import styles from './home.css';

export default function() {
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
import React from 'react';
import styles from './cocktailHeader.css';
import FontAwesome from 'react-fontawesome';
import StarRating from 'react-star-rating-component';
import CocktailGlass from '../../components/cocktailGlass/cocktailGlass';

export default function(props) {
  return (
    <React.Fragment>
      <div className={ styles.header }>
        <div className={ styles.favorite }> 
          { 
            props.message 
            ? <span className={ styles.message }>{ props.message }</span> 
            : null 
          }
          <FontAwesome
            onClick={ props.clickFavorite }
            className={ props.saved ? styles.heartActive : styles.heart }
            name='heart'
          />
        </div>
        <div className={ styles.name }>
          <h1 className={ styles.name__copy }>
            { props.cocktailName }
          </h1>
        </div>
        <div className={ styles.rating }>
          <StarRating 
            name="rate1" 
            starCount={ 5 }
            value={ props.rating }
            onStarClick={ props.onStarClick.bind(this) }
          />
          <CocktailGlass glass={ props.glass }/>
        </div>
      </div>
    </React.Fragment>
  )
}
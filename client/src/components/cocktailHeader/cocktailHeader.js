import React from 'react';
import styles from './cocktailHeader.css';
import FontAwesome from 'react-fontawesome';
import StarRating from 'react-star-rating-component';

export default function(props) {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.favorite}>
                    <FontAwesome
                        onClick={props.clickFavorite}
                        className={styles.heart}
                        name='heart'
                    />
                </div>
                <div className={styles.name}>
                    <h1 className={styles.name__copy}>
                        {props.cocktailName}
                    </h1>
                </div>
                <div className={styles.rating}>
                <StarRating 
                    name="rate1" 
                    starCount={5}
                    value={props.rating}
                    onStarClick={props.onStarClick.bind(this)}
                />
                </div>
            </div>
        </React.Fragment>
    )
}
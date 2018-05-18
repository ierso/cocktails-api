import React from 'react';
import styles from './cocktailHeader.css';
import FontAwesome from 'react-fontawesome';

export default function(props) {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.favorite}>
                    <FontAwesome
                        onClick={props.clickFavorite}
                        className={styles.heart}
                        name='heart'
                        size='2x'
                    />
                </div>
                <div className={styles.name}>
                    <h1 className={styles.name__copy}>
                        {props.cocktailName}
                    </h1>
                </div>
                <div className={styles.rating}>
                    Rating
                </div>
            </div>
        </React.Fragment>
    )
}
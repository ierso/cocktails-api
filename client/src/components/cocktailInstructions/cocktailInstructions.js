import React from 'react';
import styles from './cocktailInstructions.css';

export default function(props) {
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Instructions</h2>
            <p className={styles.copy}>{props.instruction}</p>    
        </div>
    )
}
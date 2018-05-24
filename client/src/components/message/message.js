import React from 'react';
import styles from './message.css';

export default function() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.copy}>
                <span className={styles.preDrink}>
                Let's have a 
                </span>
                <span className={styles.drink}>
                drink
                </span>
            </h1>
        </div>
    )
}
import React from 'react';
import styles from './button.css';

export default function(props) {
    return (
        <React.Fragment>
            <a href={props.path} 
                className={styles.primary}>
                {props.message}
            </a>
        </React.Fragment>
    )
}
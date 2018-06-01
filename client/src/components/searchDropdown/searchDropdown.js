import React from 'react';
import { Link } from 'react-router-dom';
import styles from './searchDropdown.css';

const SearchDropdown = (props) => {

    const matchedIngredients = props.matchedIngredients;
    
    if (props.show) {
        return (
            <div className={styles.selection}>
                <ul className={styles.list}>
                {matchedIngredients.map((ingredient, index) => {
                    return (
                        <li key={index} className={styles.item}>
                            <Link to={`/ingredient/${ingredient.strIngredient1}`}
                                className={styles.link}>
                                {ingredient.strIngredient1}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default SearchDropdown;
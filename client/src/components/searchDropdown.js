import React from 'react';
import { Link } from 'react-router-dom';

const SearchDropdown = (props) => {

    const matchedIngredients = props.matchedIngredients;

    if (matchedIngredients.length > 0) {
        return (
            <React.Fragment>
                {matchedIngredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            <Link to={`ingredient/${ingredient.strIngredient1}`}>
                                {ingredient.strIngredient1}
                            </Link>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    } else {
        return (
            <div>Waiting on content</div>
        )
    }
}

export default SearchDropdown;
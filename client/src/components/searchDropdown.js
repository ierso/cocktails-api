import React from 'react';

const SearchDropdown = (props) => {

    const matchedIngredients = props.matchedIngredients;

    if (matchedIngredients.length > 0) {
        return (
            <div>
                {matchedIngredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            {ingredient.strIngredient1}
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>Waiting on content</div>
        )
    }
}

export default SearchDropdown;
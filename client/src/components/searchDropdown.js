import React from 'react';

const SearchDropdown = (props) => {

    const matchedIngredients = props.matchedIngredients;
    console.log(matchedIngredients);

    if (matchedIngredients.length > 0) {
        return (
            <React.Fragment>
                {matchedIngredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            {ingredient.strIngredient1}
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
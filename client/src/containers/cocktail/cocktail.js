import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCocktail } from '../../actions';
import IngredientMeasurements from '../../components/ingredientMeasurements';
import CocktailHeader from '../../components/cocktailHeader/cocktailHeader';

import styles from './cocktail.css';

class Cocktail extends Component {

    //remove later
    constructor() {
        super();
        this.state = {
            rating: null
        }
    }
    
    componentWillMount() {
        const paramId = this.props.match.params.id
        this.props.fetchCocktail(paramId);
    }

    clickFavorite = () => {
        console.log('favorited');
        const { strDrink: name, idDrink } = this.props.cocktail;
        const drinkData = {
            name: name,
            drinkID: idDrink,
        }
        console.log(drinkData);
    }

    onStarClick = (nextValue, prevValue, name) => {
        console.log(nextValue);
    }

    render(){
        const cocktail = this.props.cocktail;

        if (Object.keys(cocktail).length !== 0) {
            return (
                <React.Fragment>
                    <CocktailHeader 
                        clickFavorite={this.clickFavorite}
                        cocktailName={cocktail.strDrink}
                        rating={this.state.rating}
                        onStarClick={this.onStarClick}
                    />



                    <h4>Glass: {cocktail.strGlass}</h4>
                    <p>Instructions:</p>
                    <p>{cocktail.strInstructions}</p>
                    <IngredientMeasurements cocktail={cocktail}/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1>Cocktail</h1>
                    <p>Waiting to load...</p>
                </React.Fragment>
            )
        }

    }
}

Cocktail.propTypes = {
    fetchCocktail: PropTypes.func,
    cocktail: PropTypes.object
}

const mapStateToProps = (state) => { 
    return {
        cocktail: state.cocktail 
    }
}

export default connect(mapStateToProps, { fetchCocktail })(Cocktail);
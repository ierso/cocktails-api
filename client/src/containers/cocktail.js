import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCocktail } from '../actions';

class Cocktail extends Component {
    componentWillMount() {
        this.props.fetchCocktail();
    }

    render(){
        const cocktail = this.props.cocktail;
        console.log(cocktail)
        if (Object.keys(cocktail).length !== 0) {
            return (
                <React.Fragment>
                    <h1>Cocktail</h1>
                    <h2>{cocktail.idDrink}</h2>
                    <h3>{cocktail.strDrink}</h3>
                    <h4>Glass: {cocktail.strDrink.strGlass}</h4>
                    <p>Instructions:</p>
                    <p>{cocktail.strInstructions}</p>
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

function mapStateToProps(state){
    return {
        cocktail: state.cocktail
    }
}

export default connect(mapStateToProps, { fetchCocktail })(Cocktail);
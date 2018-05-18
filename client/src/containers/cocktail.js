import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCocktail } from '../actions';
import IngredientMeasurements from '../components/ingredientMeasurements';
import FontAwesome from 'react-fontawesome';

class Cocktail extends Component {
    componentWillMount() {
        const paramId = this.props.match.params.id
        this.props.fetchCocktail(paramId);
    }

    render(){
        const cocktail = this.props.cocktail;
        console.log(FontAwesome);

        if (Object.keys(cocktail).length !== 0) {
            return (
                <React.Fragment>
                    <FontAwesome
                        className='super-crazy-colors'
                        name='rocket'
                        size='2x'
                        spin
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <h1>Cocktail</h1>
                    <h3>{cocktail.strDrink}</h3>
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
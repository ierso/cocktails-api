import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCocktail, fetchSavedCocktail, addToFavorites } from '../../actions';
import IngredientMeasurements from '../../components/ingredientMeasurements/ingredientMeasurements';
import CocktailHeader from '../../components/cocktailHeader/cocktailHeader';
import CocktailInstructions from '../../components/cocktailInstructions/cocktailInstructions';

import styles from './cocktail.css';

class Cocktail extends Component {

  //remove later
  constructor() {
    super();
    this.state = {
      rating: null
    }
  }
  
  componentDidMount() {
    const paramId = this.props.match.params.id
    this.props.fetchCocktail(paramId);
    this.props.fetchSavedCocktail(paramId);
  }

  clickFavorite = () => {
    console.log(this.state.rating);
    const { strDrink: name, idDrink:drinkID } = this.props.cocktail;
    const cocktailData = {
      name: name,
      drinkID: drinkID,
      rating: 5,
    }
    this.props.addToFavorites(cocktailData);
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({
      rating: nextValue
    })
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
            glass={cocktail.strGlass}
          />
          <IngredientMeasurements cocktail={cocktail}/>
          <CocktailInstructions instruction={cocktail.strInstructions} />   
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
  fetchSavedCocktail: PropTypes.func,
  cocktail: PropTypes.object,
  savedCocktail: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    cocktail: state.cocktail,
    savedCocktail: state.savedCocktail
  }
}

export default connect(mapStateToProps, { fetchCocktail, fetchSavedCocktail, addToFavorites })(Cocktail);
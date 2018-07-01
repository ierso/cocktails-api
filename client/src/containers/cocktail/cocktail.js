import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addToFavorites, fetchCocktail, fetchSavedCocktail, removeSavedCocktail } from '../../actions';
import IngredientMeasurements from '../../components/ingredientMeasurements/ingredientMeasurements';
import CocktailHeader from '../../components/cocktailHeader/cocktailHeader';
import CocktailInstructions from '../../components/cocktailInstructions/cocktailInstructions';

import styles from './cocktail.css';

class Cocktail extends Component {

  constructor() {
    super();
    this.state = {
      rating: null,
      saved: false
    }
  }
  
  componentDidMount() {
    const paramId = this.props.match.params.id
    this.props.fetchCocktail(paramId);
    this.props.fetchSavedCocktail(paramId);
    console.log('did mount');
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      rating: nextProps.savedCocktail.rating,
      saved: nextProps.savedCocktail.saved
    })
  }

  clickFavorite = () => {
    // if already favortied - unfavorite
    if (this.state.saved === true) {
      const savedCocktailId = this.props.savedCocktail.id
      this.props.removeSavedCocktail(savedCocktailId);
    // else do the stuff below
    } else {
      this.setState({
        saved: true
      })
      const { strDrink: name, idDrink:drinkID } = this.props.cocktail;
      const cocktailData = {
        name: name,
        drinkID: drinkID,
        rating: this.state.rating,
      }
      this.props.addToFavorites(cocktailData);
    }
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({
      rating: nextValue
    })
    // if you have already favorited the cocktail
    if (this.state.saved === true) {
      console.log('this cocktail has data saved');
    }
    // update database
  }

  render(){
    const cocktail = this.props.cocktail;
    if (Object.keys(cocktail).length !== 0) {
      return (
        <React.Fragment>
          <CocktailHeader
            clickFavorite={ this.clickFavorite }
            cocktailName={ cocktail.strDrink }
            saved={ this.state.saved }
            rating={ this.state.rating }
            onStarClick={ this.onStarClick }
            glass={ cocktail.strGlass }
          />
          <IngredientMeasurements cocktail={ cocktail }/>
          <CocktailInstructions instruction={ cocktail.strInstructions } />   
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

export default connect(mapStateToProps, 
  {
    addToFavorites, 
    fetchCocktail, 
    fetchSavedCocktail, 
    removeSavedCocktail 
  }
)(Cocktail);
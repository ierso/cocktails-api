import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCocktails } from '../../actions';
import styles from './cocktailList.css';

class CocktailList extends Component {

  componentDidMount() {
    const ingredient = this.props.match.params.name;
    this.props.fetchCocktails(ingredient);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.name !== nextProps.match.params.name) {
      const ingredient = nextProps.match.params.name;
      this.props.fetchCocktails(ingredient);
    }
  }
    renderCocktails = () => {
      const cocktails = this.props.cocktails;
      
      if (cocktails) {
        return (
          <ul className={ styles.list }>
            {cocktails.map((cocktail, index)=>{
              return (
                <li key={index} className={ styles.listItem }>
                  <Link to={`/cocktail/${ cocktail.idDrink }`} className={ styles.listLink }>
                    { cocktail.strDrink }
                  </Link>
                </li>
              )
            })}
          </ul> 
        )
      } else {
        return (
          <div>NO LIST</div>
        )
      }
  }
  render() {
    return (
      <React.Fragment>
        <h3 className={ styles.title }>Cocktail List</h3>
        { this.renderCocktails() }
      </React.Fragment>
    )
  }
}

CocktailList.propTypes = {
    fetchCocktails: PropTypes.func,
    cocktails: PropTypes.array,
}


const mapStateToProps = (state) => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, { fetchCocktails })(CocktailList);
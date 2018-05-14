import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchIngredients, matchIngredients } from '../actions';
import SearchDropdown from '../components/searchDropdown';

class IngredientSearch extends Component {
    componentWillMount() {
        this.props.fetchIngredients();
    }
    onSearchChange = () => {
        const searchInput = {
            input: this.searchIngredient.value
        }
        this.props.matchIngredients(searchInput.input, this.props.ingredients);
    }
    onSearchSubmit = (event) => {
        event.preventDefault();
        console.log('form submit');
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSearchSubmit}>
                    <input 
                        onChange={this.onSearchChange}
                        placeholder="Search by ingredient..." 
                        ref={ (input) => this.searchIngredient = input }
                        type="text" 
                        name="ingredient-search"
                    />
                    <SearchDropdown matchedIngredients={this.props.matchedIngredients}/>
                    <button type="submit">Search</button>
                </form>
            </React.Fragment>
        )
    }
}

IngredientSearch.propTypes = {
    ingredients: PropTypes.array,
    matchedIngredients: PropTypes.array,
    fetchIngredients: PropTypes.func,
    matchIngredients: PropTypes.func
}

const mapStateToProps = (state) => {
	return { 
        ingredients: state.ingredients,
        matchedIngredients: state.matchIngredients,
	}
}
export default connect(mapStateToProps, { fetchIngredients, matchIngredients })(IngredientSearch);
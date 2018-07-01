import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchIngredients, matchIngredients } from '../../actions';
import SearchDropdown from '../../components/searchDropdown/searchDropdown';
import styles from './ingredientSearch.css';

class IngredientSearch extends Component {

    constructor(){
        super();
        this.state = {
            showDropdown: false
        }
    }
    
    componentDidMount() {
        this.props.fetchIngredients();
    }

    onSearchChange = () => {
        const searchInput = {
            input: this.searchIngredient.value
        }
        this.props.matchIngredients(searchInput.input, this.props.ingredients);
        if (searchInput.input.length > 0) {
            this.setState({showDropdown: true})
        } else {
            this.setState({showDropdown: false})
        }
        
    }
    onSearchSubmit = (event) => {
        event.preventDefault();
        console.log('form submit');
    }

    render() {
        return (
            <React.Fragment>
                <form className={styles.form} onSubmit={this.onSubmit}>
                    <input 
                        onChange={this.onSearchChange}
                        placeholder="Search by ingredient..." 
                        ref={ (input) => this.searchIngredient = input }
                        type="text" 
                        name="ingredient-search"
                        autoComplete="off"
                        className={styles.input}
                    />
                    <SearchDropdown 
                        matchedIngredients={this.props.matchedIngredients}
                        resetInput={this.resetInput}
                        show={this.state.showDropdown}
                    />
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
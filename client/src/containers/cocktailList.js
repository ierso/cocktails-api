import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCocktails } from '../actions';

class CocktailList extends Component {

    componentWillMount() {
        const ingredient = this.props.match.params.name;
        this.props.fetchCocktails(ingredient);
    }
    renderCocktails = () => {
        const cocktails = this.props.cocktails;
        if (cocktails) {
            return (
                <React.Fragment>
                    {cocktails.map((cocktail, index)=>{
                        return (
                            <div key={index}>
                                <Link to={`/cocktail/${cocktail.idDrink}`}>
                                    {cocktail.strDrink}
                                </Link>
                            </div>
                        )
                    })}
                </React.Fragment> 
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
                Cocktail List
                {this.renderCocktails()}
            </React.Fragment>
        )
    }
}

CocktailList.propTypes = {
    fetchCocktails: PropTypes.func,
    cocktails: PropTypes.array,
}


const mapStateToProps = (state) => {
    console.log(state.cocktails)
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, { fetchCocktails })(CocktailList);
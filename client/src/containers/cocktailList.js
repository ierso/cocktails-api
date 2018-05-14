import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCocktails } from '../actions';

class CocktailList extends Component {

    componentWillMount() {
        this.props.fetchCocktails();
    }
    renderCocktails = () => {
        const cocktails = this.props.cocktails;
        if (cocktails) {
            return (
                <React.Fragment>
                    {cocktails.map((cocktail, index)=>{
                        return (
                            <div key={index}>{cocktail.strDrink}</div>
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
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, { fetchCocktails })(CocktailList);
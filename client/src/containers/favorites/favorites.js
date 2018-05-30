import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';
import { Link } from 'react-router-dom';

class Favorites extends Component {

    componentWillMount() {
        if (this.props.auth) {
            console.log('logged in');
            this.props.fetchFavorites();
        }
    }
    authenticated = () => {
        switch(this.props.auth) {
            case null:
                return (
                    <div>
                        ...loading
                    </div>
                )
            case false:
                return (
                    <div>
                        Log in to view favorites
                    </div>
                )  
            default:
                return (
                    this.renderFavorites()
                )
        }
    }
    
    renderFavorites = () => {
        const favorites = this.props.favorites;
        return (
            favorites.map((cocktail)=>{
                return (
                    <Link 
                        to={`/cocktail/${cocktail.drinkID}`} 
                        key={cocktail.drinkID}>
                        {cocktail.name}
                    </Link>
                )
            })
        )
    }

    render() {
        console.log(this.props.auth);
        return (
            <React.Fragment>
                Favorites
                {this.authenticated()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { fetchFavorites })(Favorites);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';
import { Link } from 'react-router-dom';
import styles from './favorites.css';

class Favorites extends Component {

    componentDidMount() {
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
          <ul className={ styles.list }>
            {favorites.map((cocktail, index)=>{
                return (
                  <li key={ index } className={ styles.listItem }>
                    <Link 
                        to={ `/cocktail/${cocktail.drinkID}` } 
                        key={ cocktail.drinkID }
                        className={ styles.listLink }>
                        { cocktail.name }
                    </Link>
                  </li>
                )
            })}
          </ul>
        )
    }

    render() {
        console.log(this.props.auth);
        return (
            <React.Fragment>
                <h3 className={ styles.title }>Favorites</h3>
                { this.authenticated() }
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
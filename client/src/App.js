import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import Cocktail from './containers/cocktail/cocktail';
import CocktailsList from './containers/cocktailList';
import Header from './components/header';
import IngredientSearch from './containers/ingredientSearch';
import NotFound from './components/notFound';

import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, pageTransitions } from './helpers/animation';

import styles from './App.css';

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <div className={styles.screen}>
          <Header />
          <Router>
              <div className={styles.rules}>
                <AnimatedSwitch
                  {...pageTransitions}
                  mapStyles={mapStyles}
                  className={styles.switchRule}
                >
                  <Route exact path='/' component={ IngredientSearch } />
                  <Route exact path='/ingredient/:name' component={ CocktailsList } />
                  <Route exact path='/cocktail/:id' component={ Cocktail } />
                  <Route component={ NotFound } />
                </AnimatedSwitch>
              </div>
          </Router>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchUser })(App);

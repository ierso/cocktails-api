import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cocktail from './containers/cocktail';
import CocktailsList from './containers/cocktailList';
import Header from './components/header';
import IngredientSearch from './containers/ingredientSearch';
import NotFound from './components/notFound';

import styles from './App.css';
console.log(styles);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Router>
            <Switch>
                <Route exact path='/' component={ IngredientSearch } />
                <Route exact path='/ingredient/:name' component={ CocktailsList } />
                <Route exact path='/cocktail/:id' component={ Cocktail } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

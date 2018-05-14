import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import IngredientSearch from './containers/ingredientSearch';
import CocktailsList from './containers/cocktailList';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
            <Switch>
                <Route exact path='/' component={ IngredientSearch } />
                <Route exact path='/ingredient/:name' component={ CocktailsList } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

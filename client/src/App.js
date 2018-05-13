import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IngredientSearch from './containers/ingredientSearch';
import CocktailsList from './containers/cocktailList';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="/auth/google">Login</a>
        <br></br>
        <a href="/auth/verify">Verify</a>
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

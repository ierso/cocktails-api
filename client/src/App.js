import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import Cocktail from './containers/cocktail/cocktail';
import CocktailsList from './containers/cocktailList';
import Header from './components/header';
import IngredientSearch from './containers/ingredientSearch';
import NotFound from './components/notFound';

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <React.Fragment>
          <Header />
          <Router>
              <Switch>
                  <Route exact path='/' component={ IngredientSearch } />
                  <Route exact path='/ingredient/:name' component={ CocktailsList } />
                  <Route exact path='/cocktail/:id' component={ Cocktail } />
                  <Route component={ NotFound } />
              </Switch>
          </Router>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchUser })(App);

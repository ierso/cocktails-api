import React, { Component } from 'react';
import './App.css';
import IngredientSearch from './containers/ingredientSearch';

import axios from 'axios';

class App extends Component {

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await axios('/auth/verify');
    return res;
  }

  render() {
    return (
      <div className="App">
        <a href="/auth/google">Login</a>
        <br></br>
        <a href="/auth/verify">Verify</a>
        <IngredientSearch />
      </div>
    );
  }
}

export default App;

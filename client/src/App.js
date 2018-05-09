import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  componentWillMount() {
    fetch('/auth/verify')
    .then(res => res.json())
    .then(body => console.log(body.message))
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

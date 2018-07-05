import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Cocktail from './containers/cocktail/cocktail';
import CocktailsList from './containers/cocktailList/cocktailList';
import Header from './components/header/header';
import Home from './components/home/home';
import Message from './components/message/message';
import IngredientSearch from './containers/ingredientSearch/ingredientSearch';
import Favorites from './containers/favorites/favorites';
import NotFound from './components/notFound';

import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, pageTransitions } from './helpers/animation';

import styles from './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  renderDesktopApp = () => {
    return (
      <div className={ styles.body }>
        <Router>
          <div className={ styles.wrapper }>
            <div className={ styles.bgBlue }></div>
            <div className={ styles.content }>
              <Header auth={ this.props.auth }/>
              <div className={ styles.appWrapper }>
                <div className={ styles.search }>
                  <div className={ styles.searchCenter }>
                    <Message/>
                    <IngredientSearch />
                  </div>
                </div>
                <div className={ styles.result }>
                  <AnimatedSwitch
                    { ...pageTransitions }
                    mapStyles={ mapStyles }
                    className={ styles.switchRule }
                  >
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/ingredient/:name' component={ CocktailsList } />
                    <Route path='/cocktail/:id' component={ Cocktail } />
                    <Route path='/favorites/' component={ Favorites } />
                    <Route component={ NotFound } />
                  </AnimatedSwitch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );  
  }

  renderMobileApp = () => {
    return (
        <Router>
          <div className={ styles.wrapperMobile }>
            <div className={ styles.content }>
              <Header auth={ this.props.auth }/>
              <div className={ styles.appWrapper }>
                <div className={ styles.result }>
                  <AnimatedSwitch
                    { ...pageTransitions }
                    mapStyles={ mapStyles }
                    className={ styles.switchRule }
                  >
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/ingredient/:name' component={ CocktailsList } />
                    <Route path='/cocktail/:id' component={ Cocktail } />
                    <Route path='/favorites/' component={ Favorites } />
                    <Route component={ NotFound } />
                  </AnimatedSwitch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      
    ); 
  }

  renderApp = () => {
    if (isMobile) {
      return this.renderMobileApp();
    }
    return this.renderDesktopApp();
  }

  render() {
    return this.renderApp();
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchUser })(App);

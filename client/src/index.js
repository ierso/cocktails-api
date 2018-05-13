import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import IngredientSearch from './containers/ingredientSearch';
import CocktailsList from './containers/cocktailList';
import NotFound from './components/notFound';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={ IngredientSearch } />
                <Route exact path='/ingredient/:name' component={ CocktailsList } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
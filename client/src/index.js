import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Montserrat:400,500', 'Lato:400,700', 'sans-serif']
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
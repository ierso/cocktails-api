import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import 'normalize.css';

WebFont.load({
    google: {
      families: ['Montserrat:400,500,800', 'Open Sans:400, 600', 'Lato:400,700', 'sans-serif']
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
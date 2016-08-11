/*eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
// import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../styles/materialize.css';
import '../styles/custom.css';
import 'jquery';
import 'hammerjs';
import '../styles/js/bin/materialize';

// const store = configureStore();
// store.dispatch(/*sumthing*/);

render(
  <Provider>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);

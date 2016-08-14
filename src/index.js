/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {loadDatabase} from './actions/databaseActions';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../styles/materialize.css';
import '../styles/custom.css';
import 'jquery';
import 'hammerjs';
import '../styles/js/bin/materialize';

const store = configureStore();
store.dispatch(loadDatabase());

render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

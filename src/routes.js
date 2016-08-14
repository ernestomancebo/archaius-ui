import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import HomePage from './components/home/HomePage';
import App from './components/App';
import DatabasePage from './components/database/DatabasePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DatabasePage} />
    <Route path="database" component={DatabasePage} />
  </Route>
);

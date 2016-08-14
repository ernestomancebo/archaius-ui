// Set up your root reducer here...
import { combineReducers } from 'redux';
import database from './databaseReducer';

const rootReducer = combineReducers({
  database
});

export default rootReducer;

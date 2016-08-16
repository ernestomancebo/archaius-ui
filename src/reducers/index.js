// Set up your root reducer here...
import { combineReducers } from 'redux';
import databases from './databaseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  databases,
  ajaxCallsInProgress
});

export default rootReducer;

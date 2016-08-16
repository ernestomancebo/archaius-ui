import * as Types from '../actions/actionTypes';
import initReducers from './initReducers';

export default function databaseReducer (state = initReducers.databases, action ) {
  switch (action.type) {
    case Types.TYPES.databases.LOAD_DATABASES_SUCCESS:
      return  action.databases;
    default:
      return state;
  }
}

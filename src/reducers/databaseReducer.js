import * as Types from '../actions/actionTypes';
import initReducers from './initReducers';

export default function databaseReducer (state = initReducers.databases, action ) {
  switch (action.type) {
    case Types.TYPES.databases.LOAD_DATABASES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.databases)
      ];
    default:
      return state;
  }
}

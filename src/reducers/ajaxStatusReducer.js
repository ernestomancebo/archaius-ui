import * as types from '../actions/actionTypes';
import initReducer from './initReducers';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initReducer.ajaxCallsInProgress, action) {
  if (action.type == types.TYPES.ajax.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (
    action.type == types.TYPES.ajax.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}

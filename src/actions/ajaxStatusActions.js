import * as Types from './actionTypes';

export function beginAjaxCall() {
  return {
    type: Types.TYPES.ajax.BEGIN_AJAX_CALL
  };
}

export function ajaxCallError() {
  return {
    type: Types.TYPES.ajax.AJAX_CALL_ERROR
  };
}

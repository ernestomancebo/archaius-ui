import * as Types from './actionTypes';
import databaseApi from '../api/mockDatabaseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createDatabaseSuccess(course) {
  return {
    type: Types.TYPES.courses.CREATE_DATABASE_SUCCESS,
    course
  };
}

export function updateDatabaseSuccess(course) {
  return {
    type: Types.TYPES.courses.UPDATE_DATABASE_SUCCESS,
    course
  };
}

export function loadDatabasesSuccess(databases) {
  return {
    type: Types.TYPES.databases.LOAD_DATABASES_SUCCESS,
    databases
  };
}

export function loadDatabase() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return databaseApi.getAllDatabases().then(databases => {
      dispatch(loadDatabasesSuccess(databases));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveDatabase(course) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return databaseApi.saveCourse(course).then(saveCourse => {
      course.id ?
        dispatch(updateDatabaseSuccess(saveCourse)) :
        dispatch(createDatabaseSuccess(saveCourse));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

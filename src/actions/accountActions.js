import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/*
 * action creators
 */
export function loadAccountSuccess(account) {
  return { type: types.LOAD_ACCOUNT_SUCCESS, account};
}

export function createAccountSuccess(account) {
  return {type: types.CREATE_ACCOUNT_SUCCESS, account};
}

export function updateAccountSuccess(account) {
  return {type: types.UPDATE_ACCOUNT_SUCCESS, account};
}

export function saveAccount(account) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return accountApi.saveAccount(account).then(account => {
      account.id ? dispatch(updateAccountSuccess(account)) :
        dispatch(createAccountSuccess(account));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
 }

export function loadAccounts(account) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return accountApi.getAllAccounts().then(account => {
      console.log(account);
      dispatch(loadAccountSuccess(account));
    }).catch(error => {
      throw(error);
    });
  };
}
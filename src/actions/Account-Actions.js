import * as types from './Action-Types';

/*
 * action creators
 */
export function create_account(account) {
  return {type: types.CREATE_ACCOUNT_SUCCESS, account}
 }

export function load_account(account) {
  return {type: types.LOAD_ACCOUNT_SUCCESS, account}
}

export function edit_account(account) {
  return {type: types.EDIT_ACCOUNT_SUCCESS, account}
}

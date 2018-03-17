/*
 * action types
 */
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const LOAD_ACCOUNT = 'LOAD_ACCOUNT'
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT'



/*
 * action creators
 */
export function create_account(account) {
  return {type: CREATE_ACCOUNT, account}
 }

export function load_account(account) {
  return {type: LOAD_ACCOUNT, account}
}

export function edit_account(account) {
  return {type: EDIT_ACCOUNT, account}
}

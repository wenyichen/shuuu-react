import {combineReducers} from 'redux';
import * as types from './Action-Types';


function account_reducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_ACCOUNT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.account)
      ]

    case types.LOAD_ACCOUNT_SUCCESS:
      return action.accounts;

    case types.EDIT_ACCOUNT_SUCCESS:
      return [
        ...state.filter(a => a.name !== action.account.id),
        Object.assign({}, action.account)
      ];

    default:
      return state
  }
}

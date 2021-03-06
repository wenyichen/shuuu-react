import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function account_reducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.CREATE_ACCOUNT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.account)
      ]

    case types.LOAD_ACCOUNT_SUCCESS:
      return action.account;

    case types.UPDATE_ACCOUNT_SUCCESS:
      return [
        ...state.filter(a => a.id !== action.account.id),
        Object.assign({}, action.account)
      ];

    default:
      return state
  }
}

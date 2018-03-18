import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
 
export default function login_reducer(state = initialState.loggedin, action) {
  switch (action.type) {
    case types.LOGIN:
      return { loggedin : action.loggedin, uid : action.uid}
    default:
      return state
  }
}
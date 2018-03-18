import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function trip_reducer(state = initialState.trips, action) {
  switch (action.type) {
    case types.CREATE_TRIP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.trip)
      ]

    case types.LOAD_TRIP_SUCCESS:
      return action.trip;

    case types.UPDATE_TRIP_SUCCESS:
      return [
        ...state.filter(a => a.id !== action.trip.id),
        Object.assign({}, action.trip)
      ];

    default:
      return state
  }
}

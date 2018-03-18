import * as types from './actionTypes';
import tripApi from '../api/mockTripApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/*
 * action creators
 */
export function loadTripSuccess(trip) {
  return { type: types.LOAD_TRIP_SUCCESS, trip};
}

export function createTripSuccess(trip) {
  return {type: types.CREATE_TRIP_SUCCESS, trip};
}

export function updateTripSuccess(trip) {
  return {type: types.UPDATE_TRIP_SUCCESS, trip};
}

export function saveTrip(trip) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return tripApi.saveTrip(trip).then(trip => {
      trip.id ? dispatch(updateTripSuccess(trip)) :
        dispatch(createTripSuccess(trip));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
 }

export function loadTrips(trip) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return tripApi.getAllTrips().then(trip => {
      console.log(trip);
      dispatch(loadTripSuccess(trip));
    }).catch(error => {
      throw(error);
    });
  };
}
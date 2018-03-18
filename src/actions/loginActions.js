import * as types from "./actionTypes";
import accountApi from "../api/mockAccountApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

/*
 * action creators
 */
export function loginAction(c, u) {
    return { type: types.LOGIN, loggedin: c, uid: u };
}

export function login(u) {
    return function(dispatch) {
        dispatch(loginAction(true, u));
    };
}

export function logout() {
    return function(dispatch) {
        dispatch(loginAction(false, -1));
    };
}

import {combineReducers} from 'redux';
import accounts from './accountReducer';
import loggedin from './loginReducer';
import trips from './tripReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  accounts,
  loggedin,
  ajaxCallsInProgress,
  trips
});

export default rootReducer;

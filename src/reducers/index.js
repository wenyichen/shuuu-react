import {combineReducers} from 'redux';
import accounts from './accountReducer';
import loggedin from './loginReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  accounts,
  loggedin,
  ajaxCallsInProgress
});

export default rootReducer;

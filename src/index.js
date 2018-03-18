import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from './store/configureStore';
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import {loadAccounts} from './actions/accountActions';
import {loadTrips} from './actions/tripActions';
import {logout} from './actions/loginActions';

let store = configureStore();
store.dispatch(loadAccounts());
store.dispatch(loadTrips());
store.dispatch(logout());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

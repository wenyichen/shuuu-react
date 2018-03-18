import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from './store/configureStore';
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {loadAccounts} from './actions/accountActions';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

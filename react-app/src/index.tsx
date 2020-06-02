import * as React from "react";

import App from "./app/containers/App";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';
import {Provider} from 'react-redux'
import configureStore from "./store";

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("example"));
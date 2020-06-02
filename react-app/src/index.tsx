import * as React from "react";

import App from "./app/containers/App";
import WeatherMonth from "./app/containers/WeatherMonth";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';
import {Provider} from 'react-redux'
import configureStore from "./store";
import {HashRouter, Route} from 'react-router-dom';

const store = configureStore();

render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/city/:id' component={WeatherMonth}/>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById("example"));
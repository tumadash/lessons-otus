import * as React from "react";

import {App} from "./app/containers/App";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';

render(<App/>, document.getElementById("example"));
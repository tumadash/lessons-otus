import * as React from "react";

import {App} from "./app/components/App";
import {render} from "react-dom";

render(<App message="Hello world!"/>, document.getElementById("example"));
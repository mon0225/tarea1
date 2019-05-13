import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import "./index.css";
import "uikit/dist/css/uikit.min.css";

import registerServiceWorker from "./registerServiceWorker";
// loads the Icon plugin
UIkit.use(Icons);
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();

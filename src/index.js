import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
// import Reducers from "./reducers";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

// const store = createStore();

render(
  <Router>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

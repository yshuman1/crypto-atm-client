import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as firebase from "firebase";
import App from "./App";
// import Reducers from "./reducers";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

// const store = createStore();
var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJ_ID,
  storageBucket: process.env.STOR_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID
};

firebase.initializeApp(config);
render(
  <Router>
    {/* <Provider store={store}> */}

    <App />
    {/* </Provider> */}
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import myStore from "./store";

ReactDOM.render(
  <Router>
    {/* <Provider store={store}></Provider> */}
    <Provider store={myStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// serviceWorker.unregister();

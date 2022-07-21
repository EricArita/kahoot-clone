import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './redux/reducers'
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App className="app" />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

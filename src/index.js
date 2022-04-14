import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {VideoContextProvider} from "./context/VideoContext";

ReactDOM.render(
  <HashRouter>
    <VideoContextProvider>
      <App />
    </VideoContextProvider>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();

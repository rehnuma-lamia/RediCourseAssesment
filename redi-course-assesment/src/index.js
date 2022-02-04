import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

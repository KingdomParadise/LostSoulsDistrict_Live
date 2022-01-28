import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/chapter2" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);

reportWebVitals();
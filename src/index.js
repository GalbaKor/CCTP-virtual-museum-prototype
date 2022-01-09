import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Exhibition1 } from "./pages/exhibition_1";
import { Exhibition2 } from "./pages/exhibition_2";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Exhibition-1" element={<Exhibition1 />} />
      <Route path="/Exhibition-2" element={<Exhibition2 />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

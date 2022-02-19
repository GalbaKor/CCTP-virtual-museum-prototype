import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Exhibition1 } from "./pages/exhibition_1";
import { Exhibition2 } from "./pages/exhibition_2";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Exhibition-1" element={<Exhibition1 />} />
        {/* Plan to introduce more Routing for each point on the page */}
        <Route path="/Exhibition-2" element={<Exhibition2 />} />
      </Routes>
    </Router>
  </ChakraProvider>,

  document.getElementById("root")
);

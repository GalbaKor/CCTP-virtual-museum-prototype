import React from "react";
import ReactDOM from "react-dom";
// import { App } from "./App";
import Homepage from "./pages/homepage";
import { Exhibition1 } from "./pages/exhibition-1";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Exhibition-1" element={<Exhibition1 />}></Route>
        {/* further routing within each exhibition to be done in their own files */}
      </Routes>
    </Router>
  </ChakraProvider>,

  document.getElementById("root")
);

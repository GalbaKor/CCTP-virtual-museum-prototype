// import react and react dom elements
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import the two main pages for the project
import Homepage from "./pages/homepage";
import { Exhibition1 } from "./pages/exhibition-1";

// import css styling and chakra UI framework
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

// contain route elements within "routes", then "router" and finally the chakra UI provider.
// all pages that use chakra must be inside the chakra provider
// default route path is set to the homepage
// pages can be found in the "pages" folder - homepage takes the place of app.js
ReactDOM.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Exhibition-1" element={<Exhibition1 />}></Route>
      </Routes>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);

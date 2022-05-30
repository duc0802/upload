import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <AppProvider>
    <Router>
      <App tab="home" />
    </Router>
  </AppProvider>
);

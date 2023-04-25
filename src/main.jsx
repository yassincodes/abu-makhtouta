import dotenv from "dotenv";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

console.log("API Key:", process.env.API_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChecksContext from "./context/ChecksContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChecksContext>
        <App />
      </ChecksContext>
    </React.StrictMode>
  </BrowserRouter>
);

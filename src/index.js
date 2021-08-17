import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = document.getElementById("root");

render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  root
);

// Service worker
serviceWorkerRegistration.register();

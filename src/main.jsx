// hooks
import React from "react";
import ReactDOM from "react-dom/client";
// components
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider >
      <App />
    </Provider>
  </React.StrictMode>
);



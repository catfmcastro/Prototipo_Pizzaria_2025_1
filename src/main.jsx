// hooks
import React from "react";
import ReactDOM from "react-dom/client";
import { defaultSystem } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
// components
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);



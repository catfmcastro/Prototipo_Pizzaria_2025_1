// hooks
import React from "react";
import ReactDOM from "react-dom/client";
// components
import { Provider } from "./components/ui/provider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);



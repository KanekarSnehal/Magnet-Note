import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, ModalProvider } from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  ModalProvider,
  NotesProvider,
  FilterProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FilterProvider>
        <NotesProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </NotesProvider>
      </FilterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

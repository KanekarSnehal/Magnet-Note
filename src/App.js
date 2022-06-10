import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./utilities/routes.js";
import { Header } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Toaster
        position="bottom-center"
        gutter={10}
        toastOptions={{
          style: {
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "green",
            },
            style: {
              background: "#22DD22",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

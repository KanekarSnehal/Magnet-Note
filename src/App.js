import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, HomePage, Login, Signup } from "./pages/index";
import { GuestRoute, ProtectedRoute } from "./utilities/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<GuestRoute />}> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* </Route> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  Login,
  Signup,
  LabelPage,
  ArchivePage,
  TrashPage,
  ProfilePage,
} from "./pages/index";
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
          <Route path="/label" element={<LabelPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

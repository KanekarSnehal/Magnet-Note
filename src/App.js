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
import { ProtectedRoute } from "./utilities/routes.js";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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

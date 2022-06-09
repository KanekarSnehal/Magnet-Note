import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/index";
import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  Login,
  Signup,
  LabelPage,
  ArchivePage,
  TrashPage,
  ProfilePage,
} from "../pages";

export const ProtectedRoute = () => {
  const {
    authState: { authToken },
  } = useAuthContext();
  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export const AppRoutes = () => {
  return (
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
  );
};

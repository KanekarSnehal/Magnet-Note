import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/index";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export const GuestRoute = () => {
  const { isAuthenticated } = useAuthContext();
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
};

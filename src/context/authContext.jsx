import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducer/index";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    user: [],
    isAuthenticated: localStorage.getItem("token") ? true : false,
    error: null,
  });
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuthContext };

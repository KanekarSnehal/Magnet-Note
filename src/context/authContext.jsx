import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authToken: localStorage.getItem("magnetNoteToken") || null,
    authUser: JSON.parse(localStorage.getItem("magnetNoteUser")) || null,
    loading: false,
  });

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuthContext };

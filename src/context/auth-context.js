import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialState = {
  isAuthModalOpen: false,
  name: "",
  number: "",
  email: "",
  password: "",
  selectedTab: "login",
};

const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthContextProvider };

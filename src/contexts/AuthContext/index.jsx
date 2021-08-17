import { createContext } from "react";
import useAuthState from "../../hooks/useAuthState";
import { auth } from "../../firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  return <AuthContext.Provider value={{ user, loading, error }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [programsList, setProgramsList] = useState([]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, customerId, setCustomerId, customerData, setCustomerData, programsList, setProgramsList }}>
      {children}
    </AuthContext.Provider>
  )
}
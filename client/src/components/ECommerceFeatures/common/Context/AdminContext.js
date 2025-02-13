import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../../../config/firebase";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  // Monitor authentication state to identify the admin user
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {

        //ChowPpoQlKbcbd5zNLlEeqcdbaA3
        if (user.uid === "oSU6Oa5MgROIglTj5qSdO2zfCHF2") {
          console.log("Admin Access");
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } else {
        console.log("User logged Out");
      }
    });
  }, []);

  return (
    <AdminContext.Provider value={admin}>{children}</AdminContext.Provider>
  );
};

// Hook for consuming AdminContext
export const useAdmin = () => useContext(AdminContext);

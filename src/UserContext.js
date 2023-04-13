import { useState } from "react";
import { createContext } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [Items ,setItems] = useState([]);
  return (
    <UserContext.Provider
      value={{
        Items,
        setItems,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

// Context
// provider
//
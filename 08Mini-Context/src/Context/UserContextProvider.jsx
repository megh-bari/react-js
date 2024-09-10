import React, { useState } from "react";
import userContext from "./UserContext";

const userContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  return (
    <userContext.Provider value={(user, SetUser)}>
      {children}
    </userContext.Provider>
  );
};

export default userContextProvider;

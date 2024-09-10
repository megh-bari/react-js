import React from "react";
import { useContext } from "react";
import userContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(userContext);
  if (!user) {
    return "Please Login"
  }
  return <div>Welcome {user.username}</div>
  
}

export default Profile;
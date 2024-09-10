import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  if (!userid) {
    return <div className="p-10 text-red-500">User ID is not provided.</div>;
  }

  return (
    <div className="p-5 text-3xl text-white font-bold bg-gray-600">User: {userid}</div>
  );
}

export default User;

import React from "react";
import { useState } from "react";

const LogoutUser = () => {
  const [user, setUser] = useState(`Jane`);
  const [status, setStatus] = useState(`ready`);
  const [confirmationMessage, setConfirmationMessage] = useState();

  if (!user) {
    //if user is not set return paragraph of confirmation message text
    return <p style={{ textAlign: `center` }}>{confirmationMessage}</p>;
  }

  const handleOnLogout = () => {
    setUser(null);
    setStatus(`initialize`);
    setConfirmationMessage(`You have been logged out.`);
  };

  //if user is set, return this Logout button markup
  return (
    <div style={{ textAlign: `center` }}>
      <p>{status}</p>
      <p>
        <button onClick={handleOnLogout}>Log out</button>
      </p>
    </div>
  );
};

export default LogoutUser;

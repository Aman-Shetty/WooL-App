import React from "react";
import { auth } from "./firebase"; // Adjust the import path

const SignOut = () => {
  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;

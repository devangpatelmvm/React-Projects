import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/Userontext";
function Login() {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username, password);
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here

    // Assuming login is successful, navigate to the next page
    navigate("/Home"); // Replace '/Home' with the actual path of your next page
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "blue", color: "white", padding: "0.5rem 1rem", border: "none" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>name</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>Mobile no</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>Address</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>E-mail</label>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

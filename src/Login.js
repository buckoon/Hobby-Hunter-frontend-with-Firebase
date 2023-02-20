import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  /*use state to track your user names*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {};
  return (
    <div className="loginScreen">
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          {" "}
          Sign In
        </button>

        <p>
          Not a member?
          <span className="login_register" onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;

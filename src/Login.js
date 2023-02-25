import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import hpic from "./images/hpic.png";

function Login() {
  /*use state to track your user names*/
  const [name, setName] = useState("");
  const [profpic, setProfpic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      /*if there is no name*/
      return alert("Please enter your name!");
    }
    auth
      .createUserWithEmailAndPassword(
        email,
        password
      ) /*creates email and password on the backend*/
      .then((userAuth) => {
        userAuth.user.updateProfile({ displayName: name }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profpic,
            })
          );
        });
      })
      .catch((error) => alert(error));
  };
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
          value={profpic}
          onChange={(e) => setProfpic(e.target.value)}
          placeholder="Profile Pic (optional)"
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
      <img src={hpic} alt="login pic" />
    </div>
  );
}

export default Login;

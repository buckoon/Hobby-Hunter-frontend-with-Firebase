import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import hpic from "./images/cover.png";

function Login() {
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
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profpic,
          })
          .then(() => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto py-20 px-6 md:px-32 items-center">
      <form className="flex flex-col items-center w-full">
        <input
          className="w-[60%]  h-12 px-3 rounded mb-3"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          className="w-[60%] h-12 px-3 rounded mb-3"
          type="text"
          value={profpic}
          onChange={(e) => setProfpic(e.target.value)}
          placeholder="Optional Profile Pic (Paste URL Here)"
        />
        <input
          className="w-[60%]  h-12 px-3 rounded mb-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-[60%]  h-12 px-3 rounded mb-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="w-[60%]  h-12 bg-green-500 rounded text-white font-bold mb-3 hover:bg-green-600 transition-all duration-200"
          type="submit"
          onClick={loginToApp}
        >
          Sign In
        </button>
        <p className="bg-gray-200 rounded p-2 text-center">
          Not a member?
          <span
            className="text-blue-500 pl-2 font-bold cursor-pointer"
            onClick={register}
          >
            Register Now
          </span>
        </p>
      </form>
      <div className="hidden md:block">
        <img
          className="w-full h-auto rounded-lg object-cover"
          src={hpic}
          alt="login pic"
        />
      </div>
    </div>
  );
}

export default Login
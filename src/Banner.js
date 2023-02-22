import React from "react";
import "./Banner.css";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Banner() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="banner">
      <h1 className="banner-title">Welcome to Hobby Hunter!</h1>
      {user ? (
        <div className="banner_right">
          <button onClick={logoutOfApp}>Logout</button>
        </div>
      ) : null}
    </div>
  );
}

export default Banner;

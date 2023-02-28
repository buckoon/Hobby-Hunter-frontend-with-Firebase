import React from "react";
import "./Banner.css";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function Banner() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  console.log({ photoUrl: user?.photoUrl });
  return (
    <div className="banner">
      <div className="banner_container">
        <div className="banner_title">
          <h1>Hobby Hunter</h1>
          <img src={logo} alt="Hobby Hunter logo" />
        </div>
        {user ? (
          <div className="banner_right">
            <div className="header_search">
              <SearchIcon />
              <input placeholder="" type="text" />
            </div>
            <h2 className="user">Welcome {user.displayName}!</h2>
            <Avatar src={user.photoUrl}></Avatar>
            <button onClick={logoutOfApp}>Logout</button>
          </div>
        ) : (
          <h1 className="intro">Find a new hobby today!</h1>
        )}
      </div>
    </div>
  );
}

export default Banner;

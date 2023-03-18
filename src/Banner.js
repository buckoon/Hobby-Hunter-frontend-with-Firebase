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
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
  <div className="flex justify-evenly sticky top-0 z-50 h-14 lg:h-20 max-w-screen-2xl bg-opacity-60 bg-white rounded-lg border-b border-gray-600">
    <div className="flex items-center h-full space-x-20  w-full lg:w-auto">
      
      <h1 className="text-green-600 items-center text-xl lg:text-4xl font-medium">Hobby Hunter</h1>
      <img src={logo} alt="Hobby Hunter logo" className="w-20 h-10 lg:w-52 lg:h-14 ml-2 rounded-lg hidden lg:block" />
      

      {user ? (
        <div className="flex items-center space-x-20">
          <div className="flex">
            <h2 className="text-green-600 text-base lg:text-3xl font-medium ml-2">
              Welcome {user.displayName}!
            </h2>
            <Avatar src={user.photoUrl} className="ml-2 lg:ml-5 w-8 h-8 lg:w-10 lg:h-10" />
          </div>
          <div className="">
            <button
              className="px-3 py-2 text-white bg-green-600 rounded-lg font-medium hover:bg-red-600 transition duration-150 ease-in-out ml-2 lg:ml-5 text-sm lg:text-base"
              onClick={logoutOfApp}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-green-600 text-base lg:text-4xl font-medium mr-5">
          Find a new hobby today!
        </h1>
      )}

      <div className="block lg:hidden">
        <img src={logo} alt="Hobby Hunter logo" className="w-12 h-8 rounded-lg" />
      </div>
    </div>
  </div>
);
}

export default Banner;

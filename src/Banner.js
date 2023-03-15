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
    <div className="sticky top-0 z-50 flex items-center justify-between mx-auto h-14 lg:h-20 w-full max-w-screen-2xl">
      <div className="flex items-center justify-between mx-auto h-full lg:px-4 space-x-20">
        <div className="flex-shrink-0">
          <div className="flex items-center bg-white rounded-lg px-3 py-2">
            <h1 className="text-green-600 text-2xl sm:text-3xl lg:text-4xl font-medium">Hobby Hunter</h1>
            <img src={logo} alt="Hobby Hunter logo" className="w-40 h-12 lg:w-52 lg:h-16 ml-2 rounded-lg" />
          </div>
        </div>
        {user ? (
          <div className="flex items-center ml-3">
            <div className="relative flex items-center">
              <SearchIcon className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>
            <h2 className="text-green-600 text-xl sm:text-2xl pl-2 lg:text-3xl font-medium mr-3">
              Welcome {user.displayName}!
            </h2>
            <Avatar src={user.photoUrl} className="mr-3 lg:mr-5 w-8 h-8 lg:w-10 lg:h-10" />
            <button
              className="px-4 py-2 text-white bg-green-600 rounded-lg font-medium hover:bg-red-600 transition duration-150 ease-in-out"
              onClick={logoutOfApp}
            >
              Logout
            </button>
          </div>
        ) : (
          <h1 className=" text-green-600 text-2xl sm:text-3xl  lg:text-4xl font-medium mr-32 lg:mr-64 hidden md:block">
            Find a new hobby today!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Banner;

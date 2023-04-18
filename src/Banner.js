import React, {useState} from "react";

import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function Banner() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [nav, setNav]= useState(false);
  const handleClick =() => {
    setNav(!nav);

  };

  
  
  
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
  <div className="h-[80px] z-10 bg-zinc-200 sticky drop-shadow-lg">
    <div className= "px-2 flex justify-between items-center w-full h-full">
      <div className= "flex items-center">
        <h1 className= "text-3xl font-bold mr-4 sm:text-4xl">Hobby Hunter</h1>
        <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platforms</li>
        <li>Pricing</li>
        </ul>
      </div>
      <div className="hidden md:flex pr-4">
          <div className="flex">
            {user && (
              <>
                <h2 className="text-base lg:text-3xl font-medium ml-2">
                  Welcome {user.displayName}!
                </h2>
                <Avatar
                  src={
                    user.photoUrl
                      ? user.photoUrl
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHEZmdtWhnx38y8OV5v7cLGlzwP8B33z2GA&usqp=CAU"
                  }
                  className="ml-2 lg:ml-5 w-8 h-8 lg:w-10 lg:h-10"
                />
              </>
            )}
            <button
              className="px-3 py-2 text-white  rounded-lg font-medium hover:bg-red-600 transition mr-2 duration-150 ease-in-out ml-2 lg:ml-5 text-sm lg:text-base"
              onClick={logoutOfApp}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 cursor-pointer" />
          ) : (
            <CloseIcon />
          )}
        </div>
      </div>

   

      <ul className= {!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
       <li className='border-b-2 border-zinc-300 w-full'>Home</li>
       <li className='border-b-2 border-zinc-300 w-full'>About</li>
       <li className='border-b-2 border-zinc-300 w-full'>Support</li>
       <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
       <li className='border-b-2 border-zinc-300 w-full'>Premium Pricing</li>
       <button
          className="px-3 py-2 text-white  rounded-lg font-medium hover:bg-red-600 transition mr-2 duration-150 ease-in-out ml-2 lg:ml-5 text-sm lg:text-base mb-4 mt-4"
          onClick={logoutOfApp}
        >
          Logout
        </button>
    </ul>
    
    
 
    {/*<div className="flex items-center h-full space-x-20  w-full lg:w-auto">
      
      
      {/*<h1 className="text-green-500 items-center text-xl lg:text-4xl font-medium">Hobby Hunter</h1>
      <img src={logo} alt="Hobby Hunter logo" className="w-20 h-10 lg:w-52 lg:h-14 ml-2 rounded-lg hidden lg:block" />*/}
      

      {/*user ? (
        <div className="flex items-center space-x-20">
          {/*<div className="flex">
            <h2 className="text-green-600 text-base lg:text-3xl font-medium ml-2">
              Welcome {user.displayName}!
            </h2>
            <Avatar src={user.photoUrl ? user.photoUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHEZmdtWhnx38y8OV5v7cLGlzwP8B33z2GA&usqp=CAU"}  className="ml-2 lg:ml-5 w-8 h-8 lg:w-10 lg:h-10" />
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
    </div>*/}
  </div>
);
}

export default Banner;

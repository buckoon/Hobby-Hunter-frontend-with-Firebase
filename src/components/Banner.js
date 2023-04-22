import React, {useState} from "react";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import useMediaQuery from "../hooks/useMediaQuery";
import { Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Search from "./Search";
import {NavLink} from 'react-router-dom';



function Banner() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [nav, setNav]= useState(false);
  const handleClick =() => {
    setNav(!nav);

  };

  
  
  const isSmallerScreen = useMediaQuery("(max-width: 768px)");
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="h-[80px] z-10 bg-zinc-200 sticky drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Hobby Hunter</h1>
          <ul className="hidden md:flex">
            <li>
              <NavLink to="/" >
                Home
              </NavLink>
            </li>
            <li>
             <NavLink to="/About" >
               About
             </NavLink>
            </li>
       
            
          </ul>
        </div>
        <div className=" items-center hidden sm:flex">
          <Search />
          <div className="flex">
            {user && (
              <>
                {/*<h2 className="items-center text-base lg:text-3xl font-medium ml-2 ">
                  Welcome {user.displayName}!
                </h2>*/}
                <Avatar
                  src={
                    user.photoUrl
                      ? user.photoUrl
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHEZmdtWhnx38y8OV5v7cLGlzwP8B33z2GA&usqp=CAU"
                  }
                  className=" mr-1 lg:ml-5 w-8 h-8 lg:w-10 lg:h-10"
                />
              </>
            )}
            <button
              className="px-3 py-2 text-white rounded-lg font-medium hover:bg-red-600 transition mr-2 duration-150 ease-in-out ml-2 lg:ml-5 text-sm lg:text-base"
              onClick={logoutOfApp}
            >
              Logout
            </button>
          </div>
          
         
        </div>
        <div className="sm:hidden" onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-5 cursor-pointer" />
            ) : (
              <CloseIcon className="w-5 cursor-pointer" />
            )}
        </div>
        
      </div>
      <div className="sm:hidden">
       <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">
           <NavLink to="/">Home</NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink to="/About">About</NavLink>
          </li>
         <button
            className="px-3 py-2 text-white rounded-lg font-medium hover:bg-red-600 transition mr-2 duration-150 ease-in-out ml-2 lg:ml-5 text-sm lg:text-base mb-4 mt-4"
           onClick={logoutOfApp}
          >
            Logout
          </button>
        </ul>
</div>

      
    </div>
  );
  
}

export default Banner;

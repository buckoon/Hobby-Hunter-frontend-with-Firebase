import React, { useEffect } from "react";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

import Banner from "./Banner";
import Hero from "./Hero";
import Weather from "./Weather";
import Toprated from "./Toprated";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        /*user is logged in */
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      } else {
        /*user is logged out*/
        dispatch(logout());
      }
    }); /* a listener that listens to authentification change */
  }, [dispatch]);

  return (
    <div className=" flex flex-col items-center bg-cover bg-center bg-fixed bg-opacity-80 bg-gradient-to-r from-blue-100 to-green-100">
      
      

      {!user ? (
        <>
        <Hero/>
        <Login />
        </>
         
      ) : (
        <div className="space-y-4 w-[90%]">
          <Banner />
          <div className="flex  justify-center space-x-4 " >
            
            <Toprated/>
            <Feed />
            <Weather/>
            

          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import Banner from "./Banner";
import Hero from "./Hero";
import Weather from "./Weather";
import Toprated from "./Toprated";
import Activities from "./Activities";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      dispatch(login(JSON.parse(userFromStorage)));
    }

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        /*user is logged in */
        const user = {
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        };
        dispatch(login(user));
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        /*user is logged out*/
        dispatch(logout());
        localStorage.removeItem("user");
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="bg-cover bg-center bg-fixed bg-opacity-80 bg-gradient-to-r bg-deep-blue #010026">
      {!user ? (
        <>
          <Hero />
          <Login />
        </>
      ) : (
        <div className="relative">
          <div className="absolute top-0 left-0  w-full h-full z-0">
            <img
              className="w-full  h-full object-cover"
              src="https://cdn.osxdaily.com/wp-content/uploads/2017/06/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg"
              alt="/"
            />
            <div className="bg-black/40 absolute top-0 left-0 w-full h-full"></div>
          </div>
          <div className="relative z-10 space-y-4">
            <Banner />
            <div className="flex justify-center space-x-4 ">
              <div className="space-y-4 sticky ">
                <div>
                  <Activities />
                </div>
                <div>
                  <Toprated />
                </div>
              </div>
              <div className="flex-[0.6]">
                <Feed/>
              </div>
              
              <div className="flex-[0.2] ">
              <Weather />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

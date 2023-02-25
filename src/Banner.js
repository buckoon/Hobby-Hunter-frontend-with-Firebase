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
    <div className="banner">
      <div class="banner_container">
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
        ) : null}
      </div>
    </div>
  );
}

export default Banner;

/*in the code above, useSelector is used to extract the current user from the store by calling selectUser, which returns the user field from the state.
useDispatch, on the other hand, is used to dispatch actions to the store. It returns a reference to the dispatch function, which can be called to dispatch an action to the store. Dispatching an action will trigger a state update, and all components that are subscribed to the relevant parts of the state will automatically re-render with the updated state.
In the code snippet above, useDispatch is used to get a reference to the dispatch function, which is then used to dispatch the logout action when the user clicks the logout button.
Overall, useSelector and useDispatch work together to allow React components to interact with the state of a Redux store. useSelector allows components to read data from the store, while useDispatch allows components to dispatch actions to update the store.
*/

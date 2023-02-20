import React from "react";
import "./App.css";
import Feed from "./Feed";

import { useSelector } from "react-redux";

import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/*header*/}

      {!user ? (
        <Login />
      ) : (
        <div className="Body">
          <Feed />
          {/*post*/}
        </div>
      )}
    </div>
  );
}

export default App;

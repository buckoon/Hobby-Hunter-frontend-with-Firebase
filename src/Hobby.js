import React from "react";
import "./Hobby.css";
import Starrating from "./Starrating";
import { Avatar } from "@mui/material";

function Hobby({ name, profpic, description, instructions, photo }) {
  return (
    <div className="hobby">
      <div className="hobby_description">
        {profpic ? <Avatar className={profpic}></Avatar> : <Avatar />}
        <div className="post_info">
          <h2>{name}</h2>
        </div>
        <p>Hobby: {description}</p>
        <p>Instructions and supplies needed: {instructions}</p>
        <div className="star">
          <Starrating />
        </div>
      </div>
      <div className="photo_container">
        <img src={photo} alt="" />
      </div>
    </div>
  );
}

export default Hobby;

import React from "react";
import "./Hobby.css";
import Starrating from "./Starrating";
import { Avatar } from "@mui/material";

function Hobby({ name, profpic, description, instructions, photo }) {
  return (
    <div className="hobby">
      <div className="hobby_description">
        <Avatar src={profpic}></Avatar>
        <div className="post_info">
          <h2 className="user">{name}</h2>
        </div>
        <h3 className="hobby_title">{description}</h3>
        <p className="p-instructions">{instructions}</p>

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

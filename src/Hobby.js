import React from "react";
import Starrating from "./Starrating";
import { Avatar } from "@mui/material";

function Hobby({ name, profpic, description, instructions, photo }) {
  return (
    <div className="flex p-5 mb-10 rounded-lg border border-gray-300 w-128 bg-gray-100">
      <div className="flex flex-col justify-between">
        <Avatar src={profpic} className="w-16 h-16" />
        <div className="post_info">
          <h2 className="text-green-600 text-sm">{name}</h2>
        </div>
        <h3 className="text-green-500 text-lg">{description}</h3>
        <p className="text-base text-gray-700 max-w-sm break-words">{instructions}</p>
        <div className="ml-0">
          <Starrating />
        </div>
      </div>
      <div className="pl-20">
        <img src={photo} alt="" className="w-60 rounded-lg" />
      </div>
    </div>
  );
}

export default Hobby;

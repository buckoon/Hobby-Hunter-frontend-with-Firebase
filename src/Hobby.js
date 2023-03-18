import React from "react";
import Starrating from "./Starrating";
import { Avatar } from "@mui/material";

function Hobby({ name, profpic, description, instructions, photo }) {
  return (
    <div className="flex p-5 mb-5 rounded-lg border border-gray-300 bg-white shadow-lg bg-opacity-50">
      <div className="flex flex-col justify-between">
        <Avatar src={profpic} className="w-16 h-16" />
        <div className="post_info mt-4">
          <h2 className="text-lg font-semibold text-green-600">{name}</h2>
        </div>
        <h3 className="text-gray-700 text-base mt-2">{description}</h3>
        <p className="text-sm text-black mt-2">{instructions}</p>
        <div className="mt-4">
          <Starrating />
        </div>
      </div>
      <div className="pl-8">
        <img src={photo} alt="" className="w-100 rounded-lg" />
      </div>
    </div>
  );
}

export default Hobby;
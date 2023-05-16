import React from "react";
import Starrating from "./Starrating";
import { Avatar } from "@mui/material";
import useMediaQuery from "../hooks/useMediaQuery";

function Hobby({ name, profpic, description, instructions, photo }) {
  const isXsScreen = useMediaQuery("(max-width: 480px)"); 
  const isSmScreen = useMediaQuery("(min-width: 481px) and (max-width: 768px)");

  return (
    <div className="flex p-5 mb-5 rounded-lg border bg-zinc-200 drop-shadow-lg border-b shadow-2xl" style={{marginBottom: '40px', justifyContent: 'space-between'}}>
      <div className="flex flex-col justify-between mr-2" style={{marginRight: '2rem'}}>
        <Avatar src={profpic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHEZmdtWhnx38y8OV5v7cLGlzwP8B33z2GA&usqp=CAU"} className="w-16 h-16" />
        <div className="post_info">
          <h2 className="text-lg font-semibold text-indigo-600">{name}</h2>
        </div>
        <h3 className="text-gray-700 text-base mt-2">{description}</h3>
        <p className="text-sm text-black mt-2">{instructions}</p>
        <div className="mt-4">
          <Starrating />
        </div>
      </div>
      <div className="w-58">
        <img
          src={photo}
          alt=""
          className={`rounded-lg ${isXsScreen ? "w-full" : isSmScreen ? "w-48" : "w-64"}`}
        />
      </div>
    </div>
  );
}

export default Hobby;

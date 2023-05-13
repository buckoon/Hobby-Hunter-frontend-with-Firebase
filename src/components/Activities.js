import React, { useState, useEffect } from "react";

function Activities() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const storedActivity = localStorage.getItem("activity");
    if (storedActivity) {
      setActivity(storedActivity);
    }
  }, []);
  

  const handleButtonClick = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const data = await response.json();
      setActivity(data.activity);
      localStorage.setItem("activity", data.activity);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-[200px] sticky flex-col shadow-xl items-center bg-zinc-200 top-[80px] rounded-lg text-black text-center border-b border-gray-600 w-[250px] ">
      <div className="flex flex-col pt-4 pb-2 px-6 h-[190px] w-[200px] overflow-hidden">
        <button
          className=" text-white border bg-indigo-600 border-indigo-600
          hover:bg-indigo-300 transition-all duration-200 hover:shadow-xl rounded-md    font-bold py-2 px-6 mb-2  focus:outline-none focus:ring-2 "
          onClick={handleButtonClick}
        >
          Get Random Hobby
        </button>
        <span className="text-sm text-black lg:text-base text-m ">{activity}</span>
      </div>
    </div>
  );
}

export default Activities;
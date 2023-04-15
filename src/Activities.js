import React, { useState } from "react";

function Activities() {
  const [activity, setActivity] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://www.boredapi.com/api/activity/");
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-fit sticky flex-col items-center bg-opacity-40 bg-white top-[80px] rounded-lg text-black text-center border-b border-gray-600">
      <div className="flex flex-col py-2 px-6 h-[150px] w-[200px] overflow-hidden">
        <button
          className="bg-green-500 hover:shadow-xl text-white font-bold py-2 px-6 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          onClick={handleButtonClick}
        >
          Get Activity
        </button>
        <span className="text-sm text-black lg:text-base xl:text-lg">{activity}</span>
      </div>
    </div>
  );
}

export default Activities;

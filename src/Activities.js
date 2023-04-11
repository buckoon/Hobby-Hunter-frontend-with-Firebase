import React, { useState, useEffect } from "react";

function Activities() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const storedActivity = localStorage.getItem("activity");
    if (storedActivity) {
      setActivity(storedActivity);
    }
  }, []);

  const handleButtonClick = () => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity);
        localStorage.setItem("activity", data.activity);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex-[0.2] h-fit sticky flex-col items-center bg-opacity-40 bg-white top-[80px] rounded-lg text-black text-center border-b border-gray-600">
      <button
        className="bg-green-500 hover:shadow-xl text-white font-bold py-2 px-6 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        onClick={handleButtonClick}
      >
        Get Activity
      </button>
      {activity}
    </div>
  );
  
}

export default Activities;

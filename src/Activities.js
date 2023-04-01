import React, { useState } from "react";

function Activities(){
    const [activity, setActivity] = useState(null);

    const handleButtonClick = () => {
        fetch("http://www.boredapi.com/api/activity/")
            .then(response => response.json())
            .then(data => setActivity(data.activity))
            .catch(error => console.error(error));
    };

    return (
        <div>
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

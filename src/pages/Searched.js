import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Search from '../components/Search';




function Searched() {
    
  const [searchedActivities, setSearchedActivities] = useState([]);
  const [searchSuccessful, setSearchSuccessful] = useState(true);
  let params = useParams();
  
  


  const getSearched = async (type) => {
    const activities = [];
    for (let i = 0; i < 8; i++) {
      const data = await fetch(`https://www.boredapi.com/api/activity?type=${type}`);
      const activity = await data.json();
      activities.push(activity);
    }
    setSearchedActivities(activities);
  };

  useEffect(() => {
    if (params.search) {
      getSearched(params.search);
    }
  }, [params.search]);

  useEffect(() => {
    if (searchedActivities.some(activity => activity.error)) {
      setSearchSuccessful(false);
    } else {
      setSearchSuccessful(true);
    }
  }, [searchedActivities]);

  return (
    <div className="relative w-full">
      <img
        className="absolute top-0 left-0 w-full h-screen object-cover z-[-1]"
        src="https://cdn.osxdaily.com/wp-content/uploads/2017/06/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg"
        alt="/"
      />
      <div className="relative z-10">
        <Banner />
        <div className="md:hidden">
          <Search/>
        </div>
        {!searchSuccessful && (
           <div className=" mx-4 bg-gray-200 rounded-lg">
                <div className="p-4 text-red-500 "> 

                    <h2 className="font-bold">Sorry, that type of activity is not in our database. Perhaps you could try some of these instead:</h2>
                    <ul>
                     <li>recreational</li>
                     <li>education</li>
                     <li>social</li>
                     <li>diy</li>
                     <li>charity</li>
                     <li>cooking</li>
                     <li>relaxation</li>
                     <li>music</li>
                     <li>busywork</li>
                     <li>social</li>
                    </ul>


                </div>
            
            </div>
        )}
        {searchSuccessful && searchedActivities.length > 0 && (
          <>
            <h1 className="ml-2 mt-4 font-bold">Activities based on query:</h1>
            <div className="activity-list m-4">
              {searchedActivities.map((activity, index) => (
                <div key={index} className="activity-item">{activity.activity}</div>
              ))}
            </div>
          </>
        )}
        {searchSuccessful && searchedActivities.length === 0 && (
          <div>No activities found for this query</div>
        )}
      </div>
    </div>
  );
}

export default Searched;

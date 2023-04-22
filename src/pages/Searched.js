import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';

function Searched() {
  const [searchedActivities, setSearchedActivities] = useState([]);
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
    if (searchedActivities.length === 0 && params.search) {
      alert('I am sorry. That type of activity does not exist in our data base. Try searching some of these:\n- recreation\n- education\n- social\n- diy\n- charity\n- cooking\n- relaxation\n- music\n- busywork\n- social');
    }
  }, [searchedActivities, params.search]);

  return (
    <div className="relative w-full z-10 space-y-4">
      <Banner />
      {searchedActivities.length > 0 && (
        <>
          <h1> Activities based on query:</h1>
          <div className="activity-list">
            {searchedActivities.map((activity, index) => (
              <div key={index} className="activity-item">{activity.activity}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Searched;

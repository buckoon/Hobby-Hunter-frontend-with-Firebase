import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Starrating.css";

function Starrating() {
   const MAX_RATING=5;
   const  MIN_RATING=1;
  const [rating, setRating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const [hover, setHover] = useState(null);
    
  const handleSetRating = (ratingValue) => {
    setRating(ratingValue);
    alert(`The average Rating has been set to ${ratingValue}`);
  };

  

  return (
    <div>
      <h2 className="starfill">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleSetRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={20}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </h2>
    </div>
  );
}

export default Starrating;

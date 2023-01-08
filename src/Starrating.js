import React, {useState} from 'react'
import {FaStar} from "react-icons/fa";
import "./Starrating.css"


function Starrating() {
    const [rating, setRating] = useState(null);
  return (
    <div className="starrating">

    <h2 className= "starfill">
        {[...Array(5)].map((star, i) =>{        /*i is for an iterator*/
            const ratingValue = i + 1;
            return (
                <label>
                    <input type="radio" 
                    name="rating" 
                    value={ratingValue}
                    onClick={()=>setRating(ratingValue)} 
                    />
                <FaStar className="star" color={ratingValue < rating ? "#ffc107" : "#e4e5e9" } 
                size={100}  />
                </label>
            )
            

        })}
    
    </h2>


    </div>
  )
}

export default Starrating
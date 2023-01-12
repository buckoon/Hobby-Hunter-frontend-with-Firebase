import React, {useState} from 'react'
import {FaStar} from "react-icons/fa";


function StarComponent() {

    const [rating, setRating] = useState(0);
    const [hoverState, setHoverState] = useState(0);
    const stars =[1,2,3,4,5]
  return (

    <div className = "StarComponent">
        <div className='flex_container'>

            {stars.map((star, i) => (
                <FaStar 
                key={i}
                starId={i}
                rating={hoverState || rating}
                onMouseEnter={()=>setHoverState(i)}
                onMouseLeave={()=>setHoverState(0)}
                onClick={()=>setRating(i)}
                
                />


            ))}



        </div>



    </div>
  )
}

export default StarComponent
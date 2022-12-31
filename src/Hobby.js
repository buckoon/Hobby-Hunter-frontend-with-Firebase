import React from 'react';
import "./Hobby.css";

function Hobby({description, instructions}) {
  return (
    <div className = "hobby">
        <div className = "hobby_description">
            <p>Hobby:    {description}</p>
        </div>

        <div className = "hobby_instructions">

            <p>Instructions and supplies needed:   {instructions}</p>


        </div>


    </div>
  )
}

export default Hobby
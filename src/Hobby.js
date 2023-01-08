import React from 'react';
import "./Hobby.css";
import  Starrating from "./Starrating";


function Hobby({description, instructions, photo}) {
  return (
    <div className = "hobby">
      
      
          <div className = "hobby_description">
            <p>Hobby:    {description}</p>

            <p>Instructions and supplies needed:   {instructions}</p>

              <div className="star">

              <Starrating/>
              </div>
           </div>
      
          

     <div className="photo_container">
          
          <img src={photo}
                alt=""/>

    </div>

        


    </div>
  )
}

export default Hobby
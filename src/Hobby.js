import React from 'react';
import "./Hobby.css";
import  Starrating from "./Starrating";


function Hobby({description, instructions, photo}) {
  return (
    <div className = "hobby">
      
      
      <div className = "hobby_description">
            <h2>Hobby:    {description}</h2>

      </div>  
      <div className ="hobby_body">

          <p>Instructions and supplies needed:   {instructions}</p>

          <div className="photo_container">
          
          <img src={photo}
                alt=""/>

          </div>
      </div>
            

      <div className="star">

              <Starrating/>
      </div>
           
      
          

    

        


    </div>
  )
}

export default Hobby
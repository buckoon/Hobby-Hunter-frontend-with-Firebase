import React from 'react';
import Home from "./Home";
import {Route, Routes} from 'react-router-dom';
import Searched from './Searched';
import About from "./About"
import WeatherPage from './WeatherPage';



function Pages() {
  return (
    
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Searched/:search" element={<Searched/>} />
       <Route path="/About/" element={<About/>} />
       <Route path="/Searched/" element={<Searched/>} />
       <Route path="/WeatherPage/" element={<WeatherPage/>} />
       
     </Routes>
  

  );
}

export default Pages;
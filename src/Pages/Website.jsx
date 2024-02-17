import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import React from 'react';

const Website = () => {
    return (
        <div className="App">
      <div>
         <div className="white-gradient" />
        <Hero />
       </div>
     <Companies />
     <Residencies/>
     <Value/>
     <Contact/>
     <GetStarted/>
    </div>
    );
}

export default Website;


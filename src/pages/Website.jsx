import React from "react";
import Companies from "../components/Companies/Companies.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GetStarted from "../components/GetStarted/GetStarted.jsx";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Residencies from "../components/Residencies/Residencies.jsx";
import Value from "../components/Value/Value.jsx";


const Website = () => {
    return(
        <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
    )
}

export default Website;
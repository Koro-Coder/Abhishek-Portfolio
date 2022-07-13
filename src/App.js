import "./App.css";
import Nav from "./common/Nav";
import Home from "./Home";
import "./common/Commoncss.css";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Education from "./Education";
import Jsprojects from "./Jsprojects";
import Contact from "./Contact";

/*import Services from "./Pages/Services";
import Education from "./Pages/Education";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Jsprojects from "./Pages/Jsprojects";*/

export default function App(){
  return(
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Work/>
      <Education/>
      <Jsprojects/>
      <Contact/>
    </div>
  )
}
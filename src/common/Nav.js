import React from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import Projects from "../assets/img/portfolio.png";
import Services from "../assets/img/services.png";
import Work from "../assets/img/work.png";
import Jsprojects from "../assets/img/jsprojects.png";

const Nav = () => {
  return (
    <div>
      <div id="navigation">
        <ul className="list-unstyled">
            <a href="#home" title="HOME">
              <li data-aos="zoom-in">
                <img src={Home} alt="home" />
              </li>
            </a>
            <a href="#about" title="ABOUT">
              <li data-aos="zoom-in">
                <img src={About} alt="about" />
              </li>
            </a>
            <a href="#services" title="What I do">
              <li data-aos="zoom-in">
                <img src={Services} alt="services" />
              </li>
            </a>
            <a href="#work" title="WORK">
              <li data-aos="zoom-in">
                <img src={Work} alt="work" />
              </li>
            </a>
            <a href="#education" title="ACADEMICS">
              <li data-aos="zoom-in">
                <img src={Education} alt="education" />
              </li>
            </a>
            <a href="#jsprojects" title="PROJECTS">
              <li data-aos="zoom-in">
                <img src={Jsprojects} alt="jsprojects" />
              </li>
            </a>
            <a href="#contact" title="CONTACT-ME">
              <li data-aos="zoom-in">
                <img src={Contact} alt="contact" />
              </li>
            </a>
        </ul>
      </div>

      <div id="navigation-mob">
        <i className="bi bi-list"></i>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import './About.css';

const About = () => {
  return (
    <div id="about"  data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>I'm a web developer, graphics designer and UI/UX designer. I love to solve design problems, develop new features and design prototypes using different mediums. My work is mainly focused on frontend-development.</p>
              <p>I'm also really enthusiastic about Competitive programming. I just love learning about new and complex Data Structures and Algorithms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

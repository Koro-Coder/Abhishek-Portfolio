import React from "react";
import "./Home.css";
import profileimg from "./assets/img/abhishek.png";
import Pdf from "./assets/pdf/AbhishekAggarwal-Resume.pdf";
import Linkedinicon from "./assets/img/socialicons/linkedin.png";
import Instagramicon from "./assets/img/socialicons/instagram.png";
import Githubicon from "./assets/img/socialicons/github.png";
import MailIcon from "./assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="Abhishek Aggarwal"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/abhishek-aggarwal-375b661b0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/koro-coder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ashu.aggarwal_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="mailto:abhishekaggarwal2801@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Abhishek Aggarwal</h1>
              <h2>Front End Developer, Competitive Programmer</h2>
              <br />
              <div className="row">
                <div className="col-sm-4">
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

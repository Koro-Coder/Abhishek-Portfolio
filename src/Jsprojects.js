import React from "react";
import "./Jsprojects.css";
import ProjectData from "./Data/Jsprojects.json";
import githubImg from "./assets/img/github.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects" id="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <div className="row">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6" key={i}>
                  <img
                    width="100%"
                    height="300"
                    src={project.projectlink}
                  ></img>
                  <br />
                  <a
                    href={project.codelink}
                    className="btn btn-default d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={i} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;

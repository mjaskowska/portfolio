import React from "react";
import { FaFile, FaFileCode } from "react-icons/fa";

import { experience, personalProjects } from "./info";

const Projects = () => {
  return (
    <div className="projects" id="03">
      <h3 className="subtitle">
        <span>03.</span> Experience & Projects
      </h3>
      <section className="experience">
        <h4 className="mid-title">Experience:</h4>
        {experience.map((item, index) => {
          const {
            companyName,
            timeline,
            jobDescription,
            projectTitle,
            imgURL,
            demoURL,
            githubURL,
            description,
            tech,
          } = item;
          return (
            <React.Fragment key={index}>
              <h5 className="company-name">
                {companyName} <span>{timeline}</span>
              </h5>
              <p className="job-description">{jobDescription}</p>
              <h5 className="project-title">{projectTitle}</h5>
              <div className="project-container">
                <div className="project-img">
                  <img src={imgURL} alt={projectTitle} />
                  <div className="links-container">
                    <a href={demoURL}>
                      <FaFile />
                    </a>
                    <a href={githubURL}>
                      <FaFileCode />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <section className="project-description">
                    <p>{description}</p>
                  </section>
                  <ul className="project-tech">
                  {tech.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      <section className="personal-projects">
        <h4 className="mid-title">Personal projects:</h4>
        {personalProjects.map((item, index) => {
          const {
            projectTitle,
            imgURL,
            demoURL,
            githubURL,
            description,
            tech,
          } = item;
          return (
            <React.Fragment key={index}>
              <h5 className="project-title">{projectTitle}</h5>
              <div className="project-container">
                <div className="project-img">
                  <img src={imgURL} alt={projectTitle} />
                  <div className="links-container">
                    <a href={demoURL}>
                      <FaFile />
                    </a>
                    <a href={githubURL}>
                      <FaFileCode />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <section className="project-description">
                    <p>{description}
                    </p>
                  </section>
                  <ul className="project-tech">
                      {tech.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      <button className="orange-btn">
        <a href="https://github.com/mjaskowska" target="blank">See more on GitHub</a>
      </button>
    </div>
  );
};

export default Projects;

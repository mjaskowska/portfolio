import React, {useRef, useEffect} from "react";
import { FaFile, FaFileCode } from "react-icons/fa";

import { experience, personalProjects } from "./info";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const componentRef = useRef(null);

  useEffect(() => {
    const component = componentRef.current.children;

    gsap.set([component], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.fromTo(
      [component],
      { y: "0" },
      {
        autoAlpha: 1,
        y: "0",
        scrollTrigger: {
          trigger: component,
          start: "top 95%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);


  return (
    <div className="projects" id="03" ref={componentRef}>
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

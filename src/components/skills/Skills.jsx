import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {skills, learningSkills} from "./info"

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const componentRef = useRef(null);

  useEffect(() => {
    const component = componentRef.current.children;
    gsap.set(component, { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.fromTo(
      component,
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
    <div className="skills" id="02" ref={componentRef}>
      <h3 className="subtitle">
        <span>02.</span> Skills
      </h3>
      <p>
        Have a look at some of the main technologies I've been using in my
        projects:
      </p>
      <ul className="skill-list">
       {skills.map(skill=><li className="skill">{skill}</li>)}
      </ul>
      <p>
        Currently learning:
      </p>
      <ul className="learning-skill-list">
        {learningSkills.map(skill=><li className="skill">{skill}</li>)}
      </ul>
    </div>
  );
};

export default Skills;

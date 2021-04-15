import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        <li className="skill">HTML</li>
        <li className="skill">CSS</li>
        <li className="skill">SASS</li>
        <li className="skill">JavaScript</li>
        <li className="skill">React</li>
        <li className="skill">Redux</li>
        <li className="skill">React Bootstrap</li>
        <li className="skill">Formik</li>
        <li className="skill">Webpack</li>
        <li className="skill">GSAP</li>
        <li className="skill">Git/ Github</li>
        <li className="skill">Figma</li>
        <li className="skill">Adobe Photoshop</li>
      </ul>
    </div>
  );
};

export default Skills;

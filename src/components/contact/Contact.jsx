import React, {useEffect, useRef} from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import EmailForm from './EmailForm'


const Contact = () => {
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
    <div className="contact" id="04" ref={componentRef}>
      <h3 className="subtitle">
        <span>04.</span> Contact me
      </h3>
    
      <section className="social-container">
        <a target="blank" href="https://github.com/mjaskowska" className="social">
          <RiGithubLine />
          <p>github.com/mjaskowska</p>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/jaskowskamagda/" className="social">
          <FiLinkedin />
          <p>linkedin.com/in/jaskowskamagda</p>
        </a>
        <div className="social">
          <FaEnvelope />
          <p>jaskowska.magda@gmail.com</p>
        </div>
        <div className="social">
          <FaPhoneAlt />
          <p>+44 7512 246796</p>
        </div>
      </section>
      <EmailForm />
      
      
    
    </div>
  );
};

export default Contact;

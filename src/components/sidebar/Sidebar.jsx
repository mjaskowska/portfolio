import React, { useState, useRef, useEffect } from "react";

import gsap from "gsap";

import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const itemsRef = useRef(null);

  useEffect(() => {
    const items = itemsRef.current.children;
    gsap.set(items, { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { delay: "1.5", ease: "power2.inOut" },
    });
    tl.to(items, { autoAlpha: 1, stagger: 0.35 });
  }, []);

  return (
    <div className="sidebar" ref={itemsRef}>
      <div className="line"></div>
      <div className="social-container">
        <a
          target="blank"
          href="https://github.com/mjaskowska"
          className="social-icon"
        >
          <RiGithubLine />
        </a>
      </div>
      <div className="social-container">
        <a
          target="blank"
          href="https://www.linkedin.com/in/jaskowskamagda/"
          className="social-icon"
        >
          <FiLinkedin />
        </a>
      </div>
      <div className="social-container">
        <button
          onClick={() => setIsEmailOpen(!isEmailOpen)}
          className={`social-icon ${isEmailOpen && "social-open"}`}
        >
          <FaEnvelope />
        </button>
        <p className={`social-info ${isEmailOpen && "social-open"}`}>
          jaskowska.magda@gmail.com
        </p>
      </div>
      <div className="social-container">
        <button
          onClick={() => setIsPhoneOpen(!isPhoneOpen)}
          className="social-icon"
        >
          <FaPhoneAlt />
        </button>
        <p className={`social-info ${isPhoneOpen && "social-open"}`}>
          +44 7512 246796
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

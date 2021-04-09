import React from "react";

import EmailForm from './EmailForm'

import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  
  return (
    <div className="contact" id="04">
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

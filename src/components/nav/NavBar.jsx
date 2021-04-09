import React, { useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import throttle from "lodash.throttle";



import SlideMenu from "./SlideMenu";

import CloseBtn from "./../../assets/Close.svg";
import Hamburger from "./../../assets/Hamburger.svg";
import CV from './../../assets/MJaskowska - CV.pdf'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowScrolled, setWindowScrolled] = useState(false);

  useEffect(() => {
    let prevPosition = window.pageYOffset;
    const handleScroll = throttle(() => {
      let currPosition = window.pageYOffset;
      if (currPosition > 200) {
        if (prevPosition > currPosition) {
          setWindowScrolled(false);
        } else {
          setWindowScrolled(true);
        }
        prevPosition = currPosition;
      } else {
        setWindowScrolled(false);
      }
    }, 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{

  },[])

  return (
    <>
      <header
        className="navbar"
        style={
          windowScrolled
            ? { transform: "translateY(-100%)" }
            : { transform: "translateY(0)" }
        }
      >
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src={CloseBtn} alt="Close" />
          ) : (
            <img src={Hamburger} alt="Menu" />
          )}
        </button>
        <section className="menu">
          <div className="menu-links">
            <AnchorLink offset={() => 100}  href="#01" className="menu-link">
              <span>01. </span>About
            </AnchorLink>
            <AnchorLink offset={() => 100}  href="#02" className="menu-link">
              <span>02. </span>Skills
            </AnchorLink>
            <AnchorLink offset={() => 100}  href="#03" className="menu-link">
              <span>03. </span>Experience & Projects
            </AnchorLink>
            <AnchorLink offset={() => 100}  href="#04" className="menu-link">
              <span>04. </span>Contact
            </AnchorLink>
          </div>
          <a className="cv-btn" href={CV} target="blank">
            CV
          </a>
        </section>
      </header>
      <SlideMenu {...{ isMenuOpen }} />
    </>
  );
};

export default NavBar;

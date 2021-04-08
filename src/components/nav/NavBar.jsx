import React, { useState, useEffect } from "react";

import throttle from "lodash.throttle";

import SlideMenu from "./SlideMenu";

import CloseBtn from "./../../assets/Close.svg";
import Hamburger from "./../../assets/Hamburger.svg";

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
          <ul className="menu-links">
            <li>
              <span>01. </span>About
            </li>
            <li>
              <span>02. </span>Skills
            </li>
            <li>
              <span>03. </span>Experience & Projects
            </li>
            <li>
              <span>04. </span>Contact
            </li>
          </ul>
          <a className="cv-btn" href="/">
            CV
          </a>
        </section>
      </header>
      <SlideMenu {...{ isMenuOpen }} />
    </>
  );
};

export default NavBar;

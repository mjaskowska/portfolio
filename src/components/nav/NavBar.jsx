import React, {useState} from 'react'

import SlideMenu from './SlideMenu'

import CloseBtn from "./../../assets/Close.svg"
import Hamburger from "./../../assets/Hamburger.svg"

const NavBar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
        <header className="navbar">
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
                    <li><span>01. </span>About</li>
                    <li><span>02. </span>Skills</li>
                    <li><span>03. </span>Experience & Projects</li>
                    <li><span>04. </span>Contact</li>
                </ul>
                <a className="cv-btn" href="/">CV</a>
            </section>
        </header>
        <SlideMenu {...{isMenuOpen}}/>
        </>
    )
}

export default NavBar

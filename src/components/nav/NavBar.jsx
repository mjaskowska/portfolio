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
        </header>
        <SlideMenu {...{isMenuOpen}}/>
        </>
    )
}

export default NavBar

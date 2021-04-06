import React from 'react'

const SlideMenu = ({isMenuOpen}) => {
    return (
        <div className={`slide-menu ${isMenuOpen && "open"}`}>
            <ul className="menu-links">
                <li><span>01. </span>About</li>
                <li><span>02. </span>Skills</li>
                <li><span>03. </span>Experience & Projects</li>
                <li><span>04. </span>Contact</li>
            </ul>
            <a href="/">CV</a>
        </div>
    )
}

export default SlideMenu

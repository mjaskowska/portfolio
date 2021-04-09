import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import CV from './../../assets/MJaskowska - CV.pdf'

const SlideMenu = ({isMenuOpen}) => {

   
    return (
        <div className={`slide-menu ${isMenuOpen && "open"}`}>
            <div className="menu-links">
                <AnchorLink offset={() => 50}  href="#01" className="menu-link"><span>01. </span>About</AnchorLink>
                <AnchorLink offset={() => 50}  href="#02" className="menu-link"><span>02. </span>Skills</AnchorLink>
                <AnchorLink offset={() => 50}  href="#03" className="menu-link"><span>03. </span>Experience & Projects</AnchorLink>
                <AnchorLink offset={() => 50}  href="#04" className="menu-link"><span>04. </span>Contact</AnchorLink>
            </div>
            <a className="cv-btn" href={CV} target="blank">CV</a>
        </div>
    )
}

export default SlideMenu

import React, {useRef, useEffect} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import gsap from "gsap"

import CV from './../../assets/MJaskowska - CV.pdf'

const SlideMenu = ({isMenuOpen}) => {

    const linksRef = useRef(null)

    useEffect(()=>{
        const links = linksRef.current.children

        gsap.set(links, {autoAlpha: 0})

    const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

    tl.fromTo(links, {x: "+=20"}, {duration: 1, autoAlpha: 1, x: "0", stagger: 0.1})    

    })

   
    return (
        <div className={`slide-menu ${isMenuOpen && "open"}`}>
            <div className="menu-links" ref={linksRef}>
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

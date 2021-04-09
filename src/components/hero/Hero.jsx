import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
    return (
        <>
        <section className="hero" id="hero">
            <p>Hello, I'm</p>
            <h1>Magda Jaskowska</h1>
            <p>I'm a Self-Taught Front-end Developer, fascinated by the web.</p>
            <AnchorLink className="orange-btn" offset={() => 50}  href="#04">Contact me</AnchorLink>           
        </section>        
        </>
    )
}

export default Hero

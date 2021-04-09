import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
 
import {FaArrowUp} from "react-icons/fa";

const BackToTop = () => {
    return (
        <AnchorLink offset={() => 150}  href="#hero" className="back-to-top" >
            <FaArrowUp />
            <p>Back To Top </p>
        </AnchorLink> 
    )
}

export default BackToTop

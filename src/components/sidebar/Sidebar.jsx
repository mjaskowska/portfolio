import React from 'react'

import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="line"></div>
            <button className="social-icon">
            <RiGithubLine />
            </button>
            <button className="social-icon">
            <FiLinkedin />
            </button>
            <button className="social-icon">
            <FaEnvelope />
            </button>
            <button className="social-icon">
            <FaPhoneAlt />
            </button>
        </div>
    )
}

export default Sidebar

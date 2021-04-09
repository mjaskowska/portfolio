import React, {useState} from 'react'

import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Sidebar = () => {
    const [isEmailOpen, setIsEmailOpen] = useState(false)
    const [isPhoneOpen, setIsPhoneOpen] = useState(false)
    return (
        <div className="sidebar">
            <div className="line"></div>
            <div className="social-container"> 
            <a target="blank" href="https://github.com/mjaskowska" className="social-icon">
            <RiGithubLine />
            </a>
            </div>
            <div className="social-container"> 
            <a  target="blank" href="https://www.linkedin.com/in/jaskowskamagda/" className="social-icon">
            <FiLinkedin />
            </a>
            </div>
            <div className="social-container"> 
            <button onClick={()=>setIsEmailOpen(!isEmailOpen)} className={`social-icon ${isEmailOpen && "social-open"}`}>
            <FaEnvelope />
            </button>
            <p className={`social-info ${isEmailOpen && "social-open"}`}>jaskowska.magda@gmail.com</p>
            </div>
            <div className="social-container">
            <button onClick={()=>setIsPhoneOpen(!isPhoneOpen)} className="social-icon">
            <FaPhoneAlt />
            </button>
            <p className={`social-info ${isPhoneOpen && "social-open"}`}>+44 7512 246796</p>
            </div>
  
        </div>
    )
}

export default Sidebar

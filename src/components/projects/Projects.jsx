import React from 'react'
import { FaFile, FaFileCode } from "react-icons/fa";

import trulse from './../../assets/trulse.png'


const Projects = () => {
    return (
        <div className="projects">
            <h3 className="subtitle"><span>03.</span> Experience & Projects</h3>
            <section className="experience">
                <h4 className="mid-title">Experience:</h4>
                <h5 className="company-name">Open Source Project <span>from 03/2021</span></h5>
                <p className="job-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem cumque quo veritatis ratione fugit sequi ipsum accusantium odio nostrum!</p>
                <h5 className="project-title">SARO</h5>
                <div className="project-container">
                    <div className="project-img">
                        <img src={trulse} alt=""/>
                        <div className="links-container">
                        <a href="/"><FaFile /></a>
                        <a href="/"><FaFileCode/></a>
                        </div>
                    </div>
                    <div className="project-info">
                        <section className="project-description">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, possimus?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, possimus?</p>
                        </section>
                        <ul className="project-tech">
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="personal-projects">
                <h4 className="mid-title">Personal projects:</h4>               
                <h5 className="project-title">SARO</h5>
                <div className="project-container">
                    <div className="project-img">
                        <img src={trulse} alt=""/>
                        <div className="links-container">
                        <a href="/"><FaFile /></a>
                        <a href="/"><FaFileCode/></a>
                        </div>
                    </div>
                    <div className="project-info">
                        <section className="project-description">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, possimus?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, possimus?</p>
                        </section>
                        <ul className="project-tech">
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                        </ul>
                    </div>
                </div>
            </section>
            <button className="orange-btn"><a href="https://github.com/mjaskowska">See more on GitHub</a></button>
        </div>
    )
}

export default Projects

import React from 'react'

import Magda from './../../assets/magda.png'

const About = () => {
    return (
        <div className="about">
            <h3 className="subtitle"><span>01. </span>About me</h3>
            <div className="pic">
            <img src={Magda} alt="magda" />
            </div>
            <div className="description">
                <p>I am an inventive and self-starting <span>Frontend Developer</span> with passion for responsive web design, animations and a firm believer in the mobile-first approach. I've learnt to google, understand documentations and read endless amount of error messages. I have the drive and energy required to make a difference in any project.</p>
                
                <p>I believe <span>learning-by-doing</span> is the most effective way of mastering new skills so I participate in <span>Open Source projects</span> and always have a side-project in progress. </p>

                <p>For the last year I have been learning technologies used in a modern web development. I have gone through multiple <span>online courses and trainings</span> (Coursera, Udemy, Codecademy), <span>documentations</span> and have been following many YouTube creators in order to gain the knowledge and solve occuring problems. </p>

                <p>One of my reasons I decided to start a Web Developer career is the mix of problem solving and getting to be creative. <span>I am committed, persistent and ready to learn</span>. </p>    

                <p>I am currently seeking a Junior Web Developer position where I will be able to work alongside other talented IT professionals in creating websites meeting the very highest standards.</p>
            </div>
            
        </div>
    )
}

export default About

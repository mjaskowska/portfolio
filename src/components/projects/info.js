import saro from './../../assets/saro.png'
import cocktails from './../../assets/cocktails.png'
import locks from './../../assets/css-locks.png'
import sandar from './../../assets/sandar.png'
import shop from './../../assets/shop.png'

export const experience = [
    {
      companyName: "Open Source Project",
      timeline: "from 03/2021",
      jobDescription:
        "I participate in an Open Source project of an international language proficiency app SARO (polish lessons for english, japanese and korean speakers).",
      projectTitle: "SARO",
      imgURL:  saro ,
      demoURL: "https://dev--i-saro.netlify.app/",
      githubURL: "https://github.com/michalskirobert/saro-react",
      description:
        "My main areas of contribution are so far: Admin Panel / CMS and implementing new and improved layouts. I've learned how to work within a team in a big project (Git/GitHub), implement many React libraries, Redux, Firebase (Auth, Firestore), validate with Formik, use constants, object destructuring and atomic design principles.",
      tech: ["React", "Hooks", "SCSS", "Styled-Components", "React-Bootstrap", "Redux", "Firebase(Auth, Firestore)", "Formik"],
    }, 

  ];

  export const personalProjects = [  
      {
        projectTitle: "CSS LOCKS GENERATOR",
        imgURL: locks,
        demoURL: "https://mjaskowska.github.io/CSS-locks-react/",
        githubURL: "https://github.com/mjaskowska/CSS-locks-react",
        description:
          "If a value (font-size) is determined by viewport units, it might result in a value that is too big or too small at times. To avoid this happening, the best solution would be to lock them in media queries, using calc() function which still requires from us some math. This tool has been created to generate those functions automatically, ready to copy straight into your CSS code. What a time saver! P.S. I'll be honest - I use it all the time and hope you'll love it too!",
        tech: ["React", "SCSS", "GSAP"],
      },      
      {
        projectTitle: "COCKTAILS",
        imgURL: cocktails,
        demoURL: "https://mjaskowska.github.io/cocktail-mixer/",
        githubURL: "https://github.com/mjaskowska/cocktail-mixer",
        description:
          "React app that fetches API (Axios) allowing users to search for their favourite coktails recipes. It displays details of each cocktail such as: whether it contains alcohol or not, type of glass, all ingredients and a method of preparation. This project has been created as a response to my personal interest in mixology and ended up to be a perfect way of improving my React skills in a real-life project.",
        tech: ["React", "React-Context", "SCSS", "Axios", "RestAPI", "GSAP"],
      },   
       {
        projectTitle: "SANDAR",
        imgURL: sandar,
        demoURL: "https://mjaskowska.github.io/sandar/",
        githubURL: "https://github.com/mjaskowska/sandar",
        description:
          "SANDAR is a company specialised in solar systems installations. This project is a static website with main focus on responsiveness and modern design trends achieved by a complex use of flexbox, grid and media queries. One of the projects where CSS locks (generated by my other app - see above) were widely implemented.",
        tech: ["JavaScript", "SCSS", "GSAP", "ScrollTrigger",],
      },   
              {
        projectTitle: "eCommerce",
        imgURL: shop,
        demoURL: "https://mjaskowska.github.io/shop/",
        githubURL: "https://github.com/mjaskowska/shop",
        description:
          "eCommerce shop website created as a showcase of my React skills improvement. I've used React functional components along with Hooks: useState, useEffect, useContext, as well as fetched fake API to access items and perfom some tasks and modifications on them. Items can be added to the basket, which state is saved to the local storage. I've implemented Firebase Authentication to create user profile (register, login, change details, reset password) and React Router to navigate within the app.",
        tech: ["React", "React Router", "Frebase Auth", "SCSS",],
      },  
  ]
  
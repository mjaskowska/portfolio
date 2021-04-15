
import NavBar from './components/nav/NavBar'
import Sidebar from './components/sidebar/Sidebar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer'
import BackToTop from './components/sidebar/BackToTop'

import './styles/_index.scss'

function App() {

  return (
    <div className="App" >
     <NavBar />
     <Sidebar />
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
     <BackToTop  />
    </div>
  );
}

export default App;

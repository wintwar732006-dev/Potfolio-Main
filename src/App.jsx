
import Nav from './Components/nav.jsx'
import { motion } from 'motion/react'
import Home from './Components/home.jsx'
import MicroBar from './Components/microbar.jsx'
import Skill from './Components/skill.jsx'
import About from './Components/about.jsx'
import InteractiveDots from './Components/InteractiveDots.jsx'
import ProjectsSection from './Components/ProjectsSection.jsx'
import Contact from './Components/contact.jsx'

const App = () => {

    return(
        <div className="relative overflow-hidden selection:bg-black selection:text-white max-w-7xl mx-auto min-[3440px]:max-w-[2800px]"> 

        <InteractiveDots 
        backgroundColor="#ffffff" 
        dotColor="#e0e0e0" className="h-[100vw]"
      />  
            <div className="relative z-10 ">
                <Nav/>
                <Home/>
                <MicroBar/>
                <Skill/>
                <About />
                <ProjectsSection/>
                <Contact/>
            </div>
        </div>
    )
}

export default App
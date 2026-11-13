import React from "react";
import { projects } from "../Components/projectsData"; // 
import Project1 from '../assets/project1.png'; 
import Project2 from '../assets/project2.png'
import github from '../assets/github.png'
import { motion } from 'motion/react'

function ProjectsSection(){

    const containerVariants = {
        hidden : {opacity: 0}, 
        visible: {
            opacity: 1, 
            transition: {
                staggerChildren: 0.50, 
            },
        },
    };  

    const cardVariants = {
        hidden: {opacity: 0, y: 25, filter: "blur(2px)"}, 
        visible: {
            opacity: 1, 
            y:0, 
            filter: "blur(0px)", 
            transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}, 
        }
    }
    return(
        <motion.div
        initial={{opacity: 0, y:24}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true, amount:0.1}}
        transition={{
            duration: 0.6,
        ease: [0.22, 1, 0.36, 1], 
    }}
        id="project" className="lg:max-w-[80%] max-w-full justify-center items-center   mx-4 lg:mx-auto">
             <h1 className="mt-10 font-mono text-gray-600 text-[0.9rem] ">&lt;projects/&gt;</h1>
             <h1 className="font-[poppins] mt-4 text-3xl font-bold text-gray-900">Project Showcase</h1>

           <motion.div 
           
           variants = {containerVariants}
           initial = "hidden"
           whileInView= "visible"
           viewport = {{once: true, amount: 0.1}}
           className="grid grid-cols-1 md:grid-cols-1 lg:px-20  lg:grid-cols-2 lg:p-10  p-5 gap-10">
             {projects.map((project) => (
                <motion.div 
                variants={cardVariants}
                whileHover={{y:-6}}
                transition={{ type: "spring", stiffness: 300, damping: 20}}
                key={project.id} 
                className="p-5 as bg-black/90  text-white  border border-gray-600  ">

                    <div className="text-white flex justify-between mb-2 font-mono">
                        <p className="">{project.year}</p>
                        <p>{project.category}</p>
                    </div>

              <div className="overflow-hidden md:flex lg:flex md:flex-row lg:flex-col">
                <img src={project.image} className="w-full  p-0 border border-white mb-3 md:w-[50%] md:left-0 lg:w-full"/>
                    <div className="md:flex md:flex-col md:w-[40%] ml-4 lg:flex-col lg:w-full ">
                        <h1 className="font-[poppins] lg:text-2xl text-xl md:text-[2rem] font-bold lg:w-full mt-2">{project.title}</h1>
                    <p className="font-[poppins] lg:text-[0.8rem] md:text-[0.8rem] text-[0.6rem] mb-3 mt-1 font-medium text-gray-300">{project.description}</p>
                    </div>

              </div>
                    
                    <div className="flex flex-wrap">
                       {project.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-300 px-2 py-1 border border-gray-500  rounded-[5px]  font-mono font-extrabold ml-2  text-[0.6rem] text-black mt-1">
                             {tag} 
                        </span>
                       ))}
                        </div>


                        <div className="flex w-full mt-5">

                                <motion.a

                                 whileHover = {{ scale: 1.04, y: -2}}
                                 whileTap = {{scale: 0.94}}
                                 transition = {{type: "spring", stiffness: 450, damping: 18}}
                                   href={project.links.live}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center md:text-[0.8rem] justify-center gap-2 rounded-xl bg-white px-3 py-1 font-['Poppins'] text-[0.6rem] font-extrabold text-black transition-all hover:bg-neutral-200 lg:text-[0.8rem]"
                                >
                                     Live Demo &rarr;
                                </motion.a>

                        
                                <motion.div 
                                 whileHover = {{ scale: 1.04, y: -2}}
                                 whileTap = {{scale: 0.94}}
                                 transition = {{type: "spring", stiffness: 450, damping: 18}}
                                
                                className="flex justify-center  items-center py-1 rounded-xl text-black mx-2 gap-2 px-3 bg-white">
                                    <img src={github} className="w-4 h-4"/>
                                    <button><a href={project.links.githubUrl} className="font-[poppins] font-extrabold text-[0.6rem] lg:text-[0.8rem] md:text-[0.8rem]">
                                    GitHub
                                    </a></button>
                                    </motion.div>
                       </div>

                </motion.div>
             ))}
           </motion.div>


        </motion.div>
    )
}

export default ProjectsSection
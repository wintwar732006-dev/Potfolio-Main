import React from "react";
import { projects } from "../Components/projectsData"; // 

function ProjectsSection(){
    return(
        <div className="max-w-[70%] justify-center items-center  mx-auto">
             <h1 className="mt-10 font-mono text-gray-600 text-[0.9rem] ">&lt;projects/&gt;</h1>
             <h1 className="font-[poppins] mt-4 text-3xl font-bold text-gray-900">Project ShowCase</h1>

           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:p-10  p-5 gap-10">
             {projects.map((project) => (
                <div key={project.id} className="p-5 as bg-black/90  text-white rounded-2xl border border-gray-600  ">

                    <div className="text-white flex justify-between mb-2 font-mono">
                        <p className="">{project.year}</p>
                        <p>{project.category}</p>
                    </div>

              <div className="md:flex lg:flex md:flex-row lg:flex-col">
                <img src={project.image} className="w-full rounded-2xl p-0 border border-white mb-3 md:w-[50%] md:left-0 lg:w-full"/>
                    <div className="md:flex md:flex-col md:w-[40%] ml-4 lg:flex-col lg:w-full ">
                        <h1 className="font-[poppins] lg:text-2xl text-xl font-bold lg:w-full mt-2">{project.title}</h1>
                    <p className="font-[poppins] lg:text-[0.8rem] text-[0.6rem] mb-3 mt-1 font-medium text-gray-300">{project.description}</p>
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

                                <div className="flex justify-center  items-center rounded-xl py-1 text-black mx-2 gap-2 px-3 bg-white">
                                  <a href={project.live} className="font-[poppins] font-extrabold text-[0.6rem] lg:text-[0.7rem]">
                                Live Demo -&gt;
                                </a>
                                </div>

                        
                                <div className="flex justify-center  items-center py-1 rounded-xl text-black mx-2 gap-2 px-3 bg-white">
                                    <img src="./src/assets/github.png" className="w-4 h-4"/>
                                    <button><a href={project.githubUrl} className="font-[poppins] font-extrabold text-[0.6rem] lg:text-[0.7rem]">
                                    GitHub
                                    </a></button>
                                    </div>
                       </div>

                </div>
             ))}
           </div>


        </div>
    )
}

export default ProjectsSection
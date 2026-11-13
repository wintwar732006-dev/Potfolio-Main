import { motion } from 'motion/react'


function Home(){
    const nameWords = ["Hsu", "Wint", "Wah", "Htet"]; 
    return(
<div className="flex flex-col " id="home">
    <div className="max-w-full lg:max-w-[80%] m-auto flex flex-col justify-center p-5 mt-5 items-start">

    <p   className="mt-10  font-mono text-gray-600 text-[0.9rem] ">&lt;PORTFOLIO/&gt;</p>

    <h1 className="flex flex-wrap gap-x-4 text-black font-bold lg:text-8xl text-6xl mt-10 font-[poppins] my-6">
        {nameWords.map((word, index) => (
            <span key={index} className="overflow-hidden inline-block "><motion.span 

             initial = {{ y: "115%" }}
             animate = {{ y: "0%"}}
             transition = {{
                duration: 0.75, 
                delay: 0.1 + index * 0.12, 
                ease: [0.16, 1, 0.3, 1]
             }}
             className = "inline-block"

       >{word}</motion.span></span>
        ))}
        </h1>

    <motion.h5 
    initial = {{opacity: 0, y: 18, filter: "blur(4px)"}}
    animate = {{ opacity: 1, y: 0, filter: "blur(0px)"}}
    transition = {{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1]}}

    
    className="mt-5 text-[18px]  font-medium text-black-200 md:text-xl">Frontend developer and UI enthusiast dedicated to bridging clean,<br/>
        minimalist design with performant, accessible code. Focused on <br/>
        building responsive web interfaces, interactive components, and <br/>
        scalable digital experiences.</motion.h5>

    <motion.p
    initial = {{opacity: 0, y: 10}}
    animate = {{ opacity: 1, y: 0}}
    transition = {{duration: 0.45, delay: 0.56}}
    
    className="my-5 text-gray-700 font-mono  ">YANGON, MYANMAR</motion.p>

    </div>

        <motion.div   
        initial = {{opacity: 0, y: 14}}
        animate = {{ opacity: 1, y: 0}}
        transition = {{duration: 0.5, delay: 0.68, ease: "easeOut"}}
        
        className="lg:max-w-[80%] max-w-full flex gap-5 mx-auto lg:ml-[15%]">
            <motion.button
            whileHover = {{ scale: 1.04, y: -2}}
            whileTap = {{ scale: 0.94}}
            transition = {{ type: "spring", stiffness: 450, damping: 18}}
            className="flex items-start justify-start px-7 py-3 rounded-5xl  bg-black text-white rounded-3xl font-medium ml-0 hover:bg-gray-800"><a href="#contact">Contact Me</a></motion.button>
            <motion.button
            whileHover = {{ scale: 1.04, y: -2}}
            whileTap = {{scale: 0.94}}
            transition = {{type: "spring", stiffness: 450, damping: 18}}
             className="flex  items-start justify-start font-medium  border border-gray-600 px-10 py-3 rounded-3xl hover:bg-gray-100"><a href="#project">Projects</a>
             </motion.button>
        </motion.div>
</div>
    ); 
}

export default Home
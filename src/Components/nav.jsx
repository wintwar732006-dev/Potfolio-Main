import { motion, useScroll, useSpring } from 'motion/react'
import mobilePic from '../assets/mobile.png' 
import { useState, useEffect } from 'react'; 


const category = [
    { name: "Home", id: 'home' },  
    { name: "Skills", id: 'skill' },  
    { name: "About", id: 'about' },  
    { name: "Project", id: 'project' },  
    { name: "Journey", id: 'Journey' },  
]; 

const NavItems = () => {
    const [activeId, setActiveId] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    const { scrollYProgress } = useScroll(); 
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120, 
        damping: 30, 
        restDelta: 0.001
    })
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id); 
                    }
                }); 
            }, 
            {
                rootMargin: "-30% 0px -50% 0px", 
            }
        ); 
        
        category.forEach((item) => {
            const section = document.getElementById(item.id); 
            if (section) observer.observe(section); 
        }); 
        
        return () => observer.disconnect(); 
    }, []); 

    const handleToken = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <div className="w-full pt-3 flex flex-col items-center font[poppins] ">

         <motion.div 
         style={{scaleX}}
         className="fixed top-0 left-0 right-0 h-0.75 bg-black origin-left z-50"
         />

            <nav className='flex justify-between items-center w-full h-15 px-6 m-auto shadow-lg z-50 border-black/20 border rounded-[30px] max-w-[80%] fixed top-3 backdrop-blur-md'>
                <h3 className="font-mono font-extrabold font text-zinc-700 text-[1rem] lg:text-[1.2rem]">&lt;HWWH/&gt;</h3>
                
                <ul className="hidden md:flex items-center justify-center gap-4 h-full font-[poppins] text-[0.9rem]">
                    {category.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <li key={item.id} className="relative">
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setActiveId(item.id)}
                                    className={`relative z-10 px-3.5 py-1.5 rounded-xl transition-colors duration-200 cursor-pointer select-none block ${
                                        isActive ? "font-bold text-black" : "font-bold text-zinc-500 hover:text-black"
                                    }`}
                                >
                                    {item.name}
                                </a>

                                {isActive && (
                                    <motion.div layoutId = "activeNavPill"
                                    transition = {{type: "spring", stiffness: 380, damping: 30}}
                                    className="absolute inset-0 bg-zinc-200/80 rounded-xl shadow-sm z-0"/>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <a href="#contact" className="hidden md:flex lg:flex font-medium text-[0.9rem] bg-black text-white rounded-[30px] px-8 py-2 lg:px-15 lg:py-3 md:px-10 md:py-2">
                    Contact
                </a>
                
                <img className="w-13 lg:hidden md:hidden bg-white rounded" src={mobilePic} onClick={handleToken} />
            </nav>

            {mobileOpen === true ? (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 max-w-[80%] right-14 lg:hidden md:hidden"
                >
                    <div className="w-fit bg-gray-100/50 p-8 list-none gap-3 rounded-[30px] flex flex-col items-end">
                        {category.map((element, index) => {
                            return (
                                <li className="font-medium text-[0.9rem]" key={index}>
                                    <a href={`#${element.id}`} onClick={() => setMobileOpen(false)}>
                                        {element.name}
                                    </a>
                                </li>
                            )
                        })}
                    </div>
                </motion.div>
            ) : ""}

            {mobileOpen === true ? (
    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-20 max-w-[80%] right-14 z-50 lg:hidden md:hidden"
    >
        <div className="w-fit bg-gray-100/80 backdrop-blur-md p-8 list-none gap-3 rounded-[30px] flex flex-col items-end shadow-lg border border-black/10">
            {category.map((element, index) => {
                const isActive = activeId === element.id;

                return (
                    <li key={index}>
                        <a
                            href={`#${element.id}`}
                            onClick={() => {
                                setActiveId(element.id);
                                setMobileOpen(false);
                            }}
                            className={`text-[0.9rem] px-3.5 py-1.5 rounded-xl transition-all duration-300 block ${
                                isActive
                                    ? "font-bold bg-zinc-200 text-black shadow-sm"
                                    : "font-medium text-zinc-600 hover:text-black hover:bg-zinc-200/50"
                            }`}
                        >
                            {element.name}
                        </a>
                    </li>
                );
            })}

            <li className="mt-1">
                <a
                    href="#contact"
                    onClick={() => {
                        setActiveId("contact");
                        setMobileOpen(false);
                    }}
                    className="font-medium text-[0.9rem] bg-black text-white rounded-[30px] px-6 py-2 inline-block"
                >
                    Contact
                </a>
            </li>
        </div>
    </motion.div>
) : ""}
        </div>
    )
}

export default NavItems
import { motion } from 'motion/react'
import mobilePic from '../assets/mobile.png' 
import {useState} from 'react'

const category = ["Work", "About", "Projects", "Resources", "Contact"]; 


const Navbar = () => {
    const [active, setActive] = useState(false); 

    const handleToken =  () => {
       active === true ? setActive(false) : ""
       active === false ? setActive(true) : ""
    }

    return (
       
       <div className="w-full  pt-3  flex flex-col items-center  ">
         <nav className=' flex justify-between items-center w-full h-15 px-6  m-auto shadow-lg border-black/20  border rounded-[30px] max-w-[80%] fixed top-3 backdrop-blur-md  '>


          <h3  className=" font-[poppins] font-extrabold font text-black-600 text-[0.9rem] ">&lt;HWWH/&gt;</h3>
           <ul className="  hidden flex-rows  lg:flex  gap-5 justify-center items-center h-full md:flex">
            {
                category.map((element, index) => {
                    return (<li className="font-medium text-[0.9rem]  " key={index}>{element}</li>)
                })
            }
           </ul>
            <button className="hidden md:flex lg:flex font-medium text-[0.9rem] bg-black  text-white  rounded-[30px]  px-8 py-2 lg:px-15 lg:py-3 md:px-10 md:py-2 ">Contact</button>
            <img  className="w-13 lg:hidden md:hidden bg-white rounded" src={mobilePic} onClick={() => handleToken()}/>
           





        </nav>

        {
            active === true ? <motion.div
             initial = {{opacity:0, y:-100}}
             animate = {{opacity:1, y:0}}
            className="absolute  top-20  max-w-[80%]   right-14 lg:hidden md:hidden">
            <div className="w-fit bg-gray-100/50 p-8 list-none gap-3 rounded-[30px] flex flex-col items-end">
                 {
                category.map((element, index) => {
                    return (<li className="font-medium text-[0.9rem]  " key={index}>{element}</li>)
                })
            }
            </div>
        </motion.div> : "" 
        }
       </div>
    )
}

export default Navbar

import React, { useRef, useState } from 'react'; 
import Arrow from '../assets/top-right.png'; 
import Send from '../assets/send.png'; 
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'



function Contact(){

   const form = useRef(); 
   const [loading, setLoading] = useState(false); 
   const [status, setStatus] = useState(''); 

   const sendEmail = (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setStatus(''); 

    const SERVICE_ID = 'service_irnt90u'; 
    const TEMPLATE_ID = 'template_nx7kfsf'; 
    const PUBLIC_KEY = 'oyfrWNoZy-eGWJSG5'; 

    emailjs.sendForm(
      SERVICE_ID, 
      TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
       })
       .then(
        () => {
          setLoading(false); 
          setStatus('Message sent successfully!'); 
          form.current.reset(); 
        }, 
        (error) => {
          setLoading(false); 
          console.error('FAILED...', error.text); 
          alert('Error details: ' + (error.text || JSON.stringify(error))); 
          setStatus('Failed to send message. Please try again.'); 
        }
       ); 
   }; 


    const [copied, setCopied] = useState(false); 
    const emailAddress = "wintwar732006@gmail.com"; 

    function handleCopy(){
        navigator.clipboard.writeText(emailAddress); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000);
    }; 

    

    return(
        <motion.div 
        initial={{opacity: 0, y:24}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true, amount:0.2}}
        transition={{duration: 0.6}}
        id="contact" className="max-w-[80%] mx-auto ">

            <p  className="mt-10  font-mono text-gray-600 text-[0.9rem] ">&lt;contact/&gt;</p>
            <h1 className=" font-[poppins] mt-4 text-3xl font-extrabold text-gray-900 max-w-[80%]">Contact Me</h1>
            <p className="mt-13  font-mono font-extrabold text-gray-900 text-[0.8rem] lg:text-[1rem]">DIRECT CONTACT</p>

                <div className = "lg:mx-0 mx-auto mt-4 md:mx-0 md:justify-start  flex justify-center lg:justify-start m  items-center gap-2.5 px-4 py-2 rounded-sm   text-black-300 text-[0.7rem] lg:text-[0.9rem] font-extrabold font-mono w-fit">

             <span className="relative flex size-2">
                <span className="animate-ping absolute  inline-flex size-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
             </span>

             <span className="flex text-[0.9rem] lg:text-[1rem] text-gray-700 ">Available for freelance & Collaborations</span>
             
             </div>



            <div className="max-w-full grid grid-col-1 lg:grid-cols-2 mx-auto mt-10">  {/* parent of two cards */}
              
                            <div className="justify-start items-start flex flex-col max-w-[90%]   "> {/* start of first card*/}

            <div className="flex md:justify-center md:items-center gap-3 top-0 left-0 px-3 py-3 bg-white border-gray-500/80 backdrop-blur border text-black font-extrabold rounded-2xl  items-center justify-center mb-4"> {/* Copy Button start */}


            <span className="flex font-mono font-bold text-[0.8rem] lg:[1rem]">{emailAddress}</span>


            <button type="button" onClick={handleCopy} className="">
                {copied ? (
                    <>
                    <svg
                    className = "size-3 lg:size-4 text-black font-bold"
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2"
                    strokeLinecap = "round"
                    strokeLinejoin = "round"
                    
                    >
                        <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        </>
                ) : (
                    <>

                    <svg
                    className = "size-3 lg:size-4 text-neutral-40"
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2"
                    strokeLinecap = "round"
                    strokeLinejoin = "round"
                    >
                        <rect width="13" height ="13" x="9" y="9" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>

                    </>
                )}
            </button>


</div> {/* Copy Button end */}

              <p className="font-mono ">Contact Me</p>

             <div className="flex flex-wrap max-w-full my-4 mx-auto gap-3">

              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border  border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://github.com/wintwar732006-dev" target="_blank">GitHub</a>
                <img src={Arrow} className="size-2"/>
              </div>


              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://www.linkedin.com/in/hsu-wint-war-htet-9a2ab941b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank">LinkedIn</a>
                <img src={Arrow} className="size-2"/>
              </div>

              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://www.facebook.com/profile.php?id=61579376662131&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank">Facebook</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://t.me/itzMe_HwwH" target="_blank">Telegram</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="viber://chat?number=%2B959671020431" target="_blank">Viber</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wintwar732006@gmail.com" target="_blank">Email</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 bg-[#ffffff] border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="tel:+959671020431" target="_blank">Phone</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

             </div>


            </div>   {/* end of first card */}

            <div className="mx-auto border border-black lg:w-full w-full px-7 py-6 bg-black font-mono  ">  {/*  start of input card*/}

          <form ref={form} onSubmit={sendEmail} >
           
            <div>
              <label for="name" className="flex font-[poppins] text-white mb-0 text-[0.8rem] lg:text-[0.9rem]">Your Name</label>
             <input id="name" type="text" name="user_name" required placeholder="Hsu Wint War Htet" className="focus:ring-2 focus:ring-gray-600 font-[poppins] placeholder:text-xs lg:placeholder:text-sm px-4 py-2 lg:py-4 mt-2 rounded-xl bg-white border border-gray-400 w-full"></input>
            </div>

          <div>
            <label for="mail" className="flex font-[poppins] text-white text-[0.8rem] mt-5  lg:text-[0.9rem]">Your Email</label>
          <input id="mail" type="email" name="user_email"  placeholder="abcd1234@gmail.com" className="font-[poppins] focus:ring-2 focus:ring-gray-600 placeholder:text-xs lg:placeholder:text-sm px-4 lg:py-4 py-2 mt-2 rounded-xl bg-white border border-gray-400 w-full"></input>
          </div>

          <div>
            <label  className="flex font-[poppins] text-white text-[0.8rem] mt-5 lg:text-[0.9rem]">Your Message</label>
          <textarea  name="message"  placeholder="Anything you want to say..."   className="font-[poppins] focus:ring-2 focus:ring-gray-600 resize-none placeholder:text-xs lg:placeholder:text-sm px-4 py-4 mt-2 rounded-xl bg-white border border-gray-400 w-full border-none"></textarea>
          </div>
           


           <hr className="my-5 text-gray-600"/>

          <div className="border-t border-gray-800 pt-3">
          <p className="text-xs md:text-s text-gray-400 mb-3">* Replies typically within 24 hours</p>
          <motion.button
            whileHover={{scale: 1.04, y:-2}}
            whileTap = {{scale: 0.94}}
            transition = {{type: "spring", stiffness: 450, damping: 18}}
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.874L5.999 12zm0 0h7.5" />
            </svg>
          </motion.button>
        </div>

        {status && (
          <p className="text- text-gray-400 mt-2">{status}</p>
        )}

          </form>
          
            </div>   {/*  end of input card*/}




            </div> {/* parent end of two cards */}

        </motion.div>
    ); 
}

export default Contact
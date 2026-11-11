import React, { useState } from 'react'; 
import Arrow from '../assets/top-right.png'; 
import Send from '../assets/send.png'; 



function Contact(){
    const [copied, setCopied] = useState(false); 
    const emailAddress = "wintwar732006@gmail.com"; 

    function handleCopy(){
        navigator.clipboard.writeText(emailAddress); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000);
    }; 

    

    return(
        <div className="max-w-[80%] mx-auto ">

            <p  className="mt-10  font-mono text-gray-600 text-[0.9rem] ">&lt;contact/&gt;</p>
            <h1 className=" font-[poppins] mt-4 text-3xl font-extrabold text-gray-900 max-w-[80%]">Contact Me</h1>
            <p className="mt-13  font-mono font-extrabold text-gray-900 text-[0.8rem] lg:text-[1rem]">DIRECT CONTACT</p>

                <div className = "lg:mx-0 mx-auto mt-4  flex justify-center lg:justify-start  items-center gap-2.5 px-4 py-2 rounded-sm   text-black-300 text-[0.7rem] lg:text-[0.9rem] font-extrabold font-mono w-fit">

             <span className="relative flex size-2">
                <span className="animate-ping absolute  inline-flex size-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
             </span>

             <span className="flex text-[0.9rem] lg:text-[1rem] text-gray-700 ">Available for freelance & Collaborations</span>
             
             </div>



            <div className="max-w-full grid grid-col-1 lg:grid-cols-2 mx-auto mt-10">  {/* parent of two cards */}
              
                            <div className="justify-start items-start flex flex-col max-w-[90%]   "> {/* start of first card*/}

            <div className="flex gap-3 top-0 left-0 px-3 py-3 ml-5 bg-black/40 backdrop-blur border-2 border-gray-400 text-black font-extrabold rounded-2xl  items-center justify-center mb-4"> {/* Copy Button start */}


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

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://github.com/wintwar732006-dev" target="_blank">GitHub</a>
                <img src={Arrow} className="size-2"/>
              </div>


              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://www.linkedin.com/in/hsu-wint-war-htet-9a2ab941b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank">LinkedIn</a>
                <img src={Arrow} className="size-2"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://www.facebook.com/profile.php?id=61579376662131&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank">Facebook</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://t.me/itzMe_HwwH" target="_blank">Telegram</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="viber://chat?number=%2B959671020431" target="_blank">Viber</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wintwar732006@gmail.com" target="_blank">Email</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

              <div className="flex gap-2 px-4 py-2 border border-gray-500/80 rounded-xl items-center justify-center w-fit font-bold font-mono text-[0.7rem] lg:text-[0.9rem] cursor-pointer hover:text-gray-900/90">
                <a href="tel:+959671020431" target="_blank">Phone</a>
                <img src={Arrow} className="size-2 hover:transition-rotate(45deg)"/>
              </div>

             </div>


            </div>   {/* end of first card */}

            <div className="mx-auto border border-black lg:w-full w-full px-7 py-6 bg-black font-mono  ">  {/*  start of input card*/}

          <label for="name" className="flex font-[poppins] text-white mb-0 text-[0.8rem] lg:text-[0.9rem]">Your Name</label>
          <input id="name" type="text" placeholder="Hsu Wint War Htet" className="font-[poppins] placeholder:text-xs lg:placeholder:text-sm px-4 py-2 lg:py-4 mt-2 rounded-xl bg-white border border-gray-400 w-full"></input>

          <label for="mail" className="flex font-mono text-white text-[0.8rem] mt-5  lg:text-[0.9rem]">Your Email</label>
          <input id="mail" type="mail" placeholder="wintwar732006@gmail.com" className="placeholder:text-xs lg:placeholder:text-sm px-4 lg:py-4 py-2 mt-2 rounded-xl bg-white border border-gray-400 w-full"></input>

          <label  className="flex font-mono text-white text-[0.8rem] mt-5 lg:text-[0.9rem]">Your Message</label>
          <textarea  type placeholder="Anything you want to say..."   className=" placeholder:text-xs lg:placeholder:text-sm px-4 py-4 mt-2 rounded-xl bg-white border border-gray-400 w-full border-none"></textarea>
           


           <hr className="my-5 text-gray-600"/>

          <div className=" text-white">
                       <span className="font-mono  mx-3 text-gray-300 text-[0.8rem] lg:text-[0.9rem]">* Replies typically within 24 hours</span>
                       <div className="right-0 lg:mt-5 lg:right-0">
                         <button className="flex w-fit lg:mr-0 justify-start items-center  gap-1 text-[0.7rem] lg:text-[0.9rem] text-black bg-white px-3 py-2 font-bold my-5 rounded-2xl ">Send Message<img src={Send} className="lg:size-3 size-2.5 items-center justify-center font-bold"/></button>

                       </div>
          </div>

            </div>   {/*  end of input card*/}

            </div> {/* parent end of two cards */}

        </div>
    ); 
}

export default Contact
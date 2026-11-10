function About(){
    return(
<div>

        <p className="mt-10 ml-[10%] font-mono text-gray-600 text-[0.9rem] ">&lt;BACKGROUND/&gt;</p>
        <h1 className="ml-[10%] font-[poppins] mt-4 text-3xl font-bold text-gray-900 max-w-[80%]">Crafting thoughtful high performance interfaces at the 
            intersection of discipline and engineering
        </h1>

        <div className="lg:flex lg:justify-end max-w-[80%] mx-auto mt-7 gap-2">

         <div className="flex flex-col">
            <p className=" font-[poppins] text-[1rem] lg:text[2rem] ps-5"> I’m <span className="font-bold text-[1.1rem] text-gray-900">Hsu Wint Wah Htet</span> — a frontend developer dedicated to building polished,
          responsive interfaces where clean design meets performant code.
         As a largely <span className="font-bold text-[1.1rem] text-gray-900">self-taught builder</span>, I thrive on diving deep into frontend architectures, 
         crafting modular UI systems from scratch, and collaborating under pressure in tech sprint environments 
         to solve practical problems. Currently pursuing a dual degree in <span className="font-bold text-[1.1rem] text-gray-900">Computer Science at DGU and Law at YUDE</span>,
         I bridge the gap between technical execution and structural thinking — combining algorithmic problem-solving with a
         conscious understanding of software governance.Whether engineering micro-interactions or architecting multi-device 
         layouts, my goal is always the same: delivering thoughtful, resilient digital products with zero visual bloat. </p>

         <div className="m-3 mt-7 bg-black p-5 rounded-xl text-white  selection:text-black">
        <p className="  font-mono text-white text-[0.9rem] ">&lt; KEY VALUES &gt; </p>
        <hr className="mt-4 text-gray-600"/>

        <div className="my-3">
            <div className="my-3 flex justify-between font-mono text-[0.9rem]">
                <p>Location</p>
                <p>Yangon, MM (UTC+6:30)</p>
            </div>

             <div className="my-3 flex justify-between font-mono text-[0.9rem]">
                <p>Academics</p>
                <p>CS(DGU), B.A Law(YUDE)</p>
            </div>

             <div className="my-3 flex justify-between font-mono text-[0.9rem]">
                <p>English Prof</p>
                <p>CEFR B2 (ER SET)</p>
            </div>

             
        </div>

         </div>
        <div>
            <span></span>
            <p>Open for Collaborations</p>
        </div>
       </div>


        <div className="lg:max-w-[50%] flex flex-col justify-center items-center">
  
     <img src="./src/assets/profile.png" className="max-w-[70%] lg:max-w-[50%] flex justify-center items-center lg:-mt-15"/>

    <div  className="w-full l m-7 mt-3 flex items-center justify-center flex-col ">
            <div className=" gap-3 flex items-center justify-center flex-col " >
                <p className="font-medium text-mono text-xl ">Forntend Developer</p>
                <p className="font-medium text-mono text-[1.1rem] -mt-3">Hsu Wint Wah Htet</p>
            </div>


            <div className="flex gap-3 justify-center items-center">

               <div className="items-center justify-center flex flex-col px-6 py-1  m-2 bg-linear-[135deg,#00000033_40%,#efefef1a_90%,#FFFFFF33_100%] backdrop-blur   rounded-2xl">
                <p className="text-gray-800 font-[poppins] font-bold text-xl">PROJECTS</p>
                <p className="text-gray-900 font-[poppins] text-xl">3+</p>
               </div>

               <div className="items-center justify-center flex flex-col px-6 py-1  m-2 bg-linear-[135deg,#00000033_40%,#efefef1a_90%,#FFFFFF33_100%] backdrop-blur  rounded-2xl">
                <p className="text-gray-800 font-[poppins] font-bold text-xl">CERTIFICATES</p>
                <p className="text-gray-900 font-[poppins] text-xl">2</p>
               </div>

            </div>

           <div className="max-w-[90%] flex justify-center items-center mt-5">
                 <p className="font-mono text-xl "><i><b>"Aesthetic discipline is not the addition of decorative layers, 
                        but the rigorous subtraction of visual noise."</b>
                        </i></p>

           </div>




    </div>

   
        </div>

        </div>

       

</div>
    ); 
}
export default About
import MiProfile from '../assets/profile.png';

function About(){
    return(
<div id="about" className="max-w-full lg:max-w-[80%] mx-auto">

        <p className="mt-10 ml-4 font-mono text-gray-600 text-[0.9rem] ">&lt;BACKGROUND/&gt;</p>
        <h1 className=" ml-4 font-[poppins] mt-4 text-3xl font-bold text-gray-900 max-w-[80%]">About Me
        </h1>

        <div className="lg:flex lg:justify-center  max-w-full  mx-auto mt-7 gap-2">

         <div className="flex flex-col lg:max-w-full max-w-full mx-auto">
            <p className=" font-[poppins] text-[1rem] text-gray-700 lg:text[2rem] px-5"> I’m <span className="font-bold text-[1.1rem] text-gray-800">Hsu Wint Wah Htet</span> — a frontend developer dedicated to building polished,
          responsive interfaces where clean design meets performant code.
         As a largely <span className="font-bold text-[1.1rem] text-gray-800">self-taught builder</span>, I thrive on diving deep into frontend architectures, 
         crafting modular UI systems from scratch, and collaborating under pressure in tech sprint environments 
         to solve practical problems. Currently pursuing a dual degree in <span className="font-bold text-[1.1rem] text-gray-800">Computer Science at DGU and Law at YUDE</span>,
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
                <p>CEFR B2 (EF SET)</p>
            </div>

             
        </div>

         </div>
        <div>
            <span></span>
            <p>Open for Collaborations</p>
        </div>
       </div>


        <div className="lg:max-w-[35%] flex flex-col mx-auto lg:justify-center lg:items-center mt-10 ml-10">
  
     <img src={MiProfile} className="max-w-[60%] mt-10 mx-auto lg:max-w-[70%] flex justify-center items-center lg:-mt-15"/>

    <div  className="w-full l m-7 mt-3 mx-auto flex items-center justify-center flex-col ">
            <div className=" gap-3 flex items-center justify-center flex-col " >
                <p className="font-semibold font-[poppins] text-zinc-700 text-xl mt-4 ">Frontend Developer</p>
                <p className="font-semibold font-[poppins] text-[1.1rem] text-zinc-600 -mt-2">Hsu Wint Wah Htet</p>
            </div>


            <div className="flex gap-2 justify-center items-center max-w-[80%] mx-auto mt-3 ">

               <div className="items-center justify-center flex flex-col px-6 py-1  m-2   rounded-2xl">
                <p className="text-zinc-700 font-[poppins] font-bold text-[0.8rem]">PROJECTS</p>
                <p className="text-zinc-800 font-[poppins] font-bold text-xl">3+</p>
               </div>

               <div className="items-center justify-center flex flex-col px-6 py-1  m-2    rounded-2xl">
                <p className="text-zinc-700 font-[poppins] font-bold text-[0.8rem]">CERTIFICATES</p>
                <p className="text-zinc-800 font-[poppins] font-bold text-xl">2</p>
               </div>

            </div>

           <div className="max-w-[90%] flex justify-center items-center mt-5  lg:block">
                 <p className="font-mono text-xl text-zinc-700 hidden lg:block"><i><b>"Aesthetic discipline is not the addition of decorative layers, 
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
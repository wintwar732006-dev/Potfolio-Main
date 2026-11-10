function Home(){
    return(
<div className="flex flex-col ">
    <div className="max-w-[80%] m-auto flex flex-col justify-center p-5 mt-5 items-start">

    <p   className="mt-10  font-mono text-gray-600 text-[0.9rem] ">&lt;PORTFOLIO/&gt;</p>

    <h1 className="text-black font-bold lg:text-8xl text-6xl mt-10 font-[poppins] my-6">Hsu Wint Wah Htet</h1>

    <h5 className="mt-5 text-[18px] font-medium font-black text-black-200 md:text-xl">Frontend developer and UI enthusiast dedicated to bridging clean,<br/>
        minimalist design with performant, accessible code. Focused on <br/>
        building responsive web interfaces, interactive components, and <br/>
        scalable digital experiences.</h5>

    <p className="my-5 text-gray-700 font-mono  ">YANGON, MYANMAR</p>

    </div>

        <div   className="max-w-[80%] flex gap-5 mx-auto ml-[15%]">
            <button className="flex items-start justify-start px-7 py-3 rounded-5xl  bg-black text-white rounded-3xl font-medium ml-0 hover:bg-gray-800">Contact Me</button>
            <button className="flex  items-start justify-start font-medium  border border-gray-600 px-10 py-3 rounded-3xl hover:bg-gray-100">Projects</button>
        </div>
</div>
    ); 
}

export default Home
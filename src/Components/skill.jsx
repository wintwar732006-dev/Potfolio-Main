import Skills from "../hook/icons.js";
import react from '../assets/react.png'
import C from '../assets/C++.png';
import Git from '../assets/git.png'; 
import GitHub from '../assets/github.png'; 
import VSCode from '../assets/vsCode.png'; 
import Cursor from '../assets/cursor.png'; 
import Framer from '../assets/framer.png'; 
import Figma from '../assets/figma.png'; 

const { HTML5, CSS3, TailwindCss, JavaScript, React } = Skills;

const Tech = ["HTML5", "CSS3", "TailwindCss", "JavaScript", "React"]

const SkillIcon = [
  HTML5,
  CSS3,
  TailwindCss,
  JavaScript,
  React,
];



function Skill() {
  return (
    <div id="skill" >
      <p className="mt-10 lg:ml-[10%] font-mono text-gray-600 text-[0.9rem] ml-4">
        &lt;CAPABILITIES/&gt;
      </p>

      <h1 className="lg:ml-[10%] ml-4 font-[poppins] mt-4 text-3xl font-bold text-gray-900">
        Technical Skills
      </h1>

      <div className="lg:max-w-[80%] max-w-full bg-black mx-4 rounded-2xl my-10 lg:mx-auto pb-5">
        <div className="p-5">
          <div>
            <p className="mt-10 ml-[10%] font-mono text-white text-[0.9rem] selection:bg-white selection:text-black">
              01 - FRONTEND CORE
            </p>

            <div className="flex flex-wrap gap-2 pl-[5%] w-full mt-5">
              { 
                Tech.map((element, index) => {
                  return (
                    <li key={index} className="font-mono text-[13px] gap-1 list-none flex justify-center font-bold items-center pl-3 border-2 border-gray-600 bg-[#fff] pr-3 pt-1 pb-1 rounded-3xl">
                      <img src={SkillIcon[index]} className="size-3.5"/>
                      <span>{element}</span>
                    </li>
                  )
                })
              }
            </div>
          </div>
        </div>

        <hr className="max-w-[80%] mx-auto text-gray-700 mt-5" />

        <div className="p-5">
          <div>
            <p className="mt-10 ml-[10%] font-mono text-white text-[0.9rem] selection:bg-white selection:text-black">
              02 - TOOLS, DESIGN & LANGUAGES
            </p>
          </div>

          <div className="flex flex-wrap max-w-[90%] mx-auto">
            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img src={C} className="w-3.5 h-3.5" />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                C++
              </span>
            </div>

            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img src={Git} className="w-3.5 h-3.5" />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                Git
              </span>
            </div>

            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img
                src={GitHub}
                className="w-3.5 h-3.5"
              />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                GitHub
              </span>
            </div>

            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img
                src={VSCode}
                className="w-3.5 h-3.5"
              />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                VS Code
              </span>
            </div>

            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img
                src={Cursor}
                className="w-3.5 h-3.5"
              />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                Cursor
              </span>
            </div>

            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img
                src={Framer}
                className="w-3.5 h-3.5"
              />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                Framer
              </span>
            </div>

            <div className="flex mt-8 mr-1 ml-1 px-4 items-center h-8 rounded-4xl justify-center gap-1 bg-white border-2 border-gray-600">
              <img
                src={Figma}
                className="w-3.5 h-3.5"
              />
              <span className="font-mono text-black text-[0.8rem] flex font-bold">
                Figma
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
import React, { useState, useEffect } from "react";
import { motion } from 'motion/react'

const milestones = [
  {
    id: "mar-2026",
    period: "Mar 2026",
    status: "Completed",
    title: "Visual Prototyping & Custom Layouts",
    category: "Design to Web • Framer",
    summary:
    "Got my start in web design and development using Framer. Instead of using pre-built templates, I focused on learning layout mechanics from the ground up and shipped 4 custom sites.",
    keyPoints: [
    "Built responsive layouts and grids directly inside Framer.",
    "Created 4 original, template-free interactive projects from scratch.",

    ],
    stack: ["Framer", "Visual Prototyping", "Wireframing", "UI Design"]
  },
  {
    id: "may-jul-2026",
    period: "May – Jul 2026",
    status: "Completed",
    title: "Core Web Foundations & Logic",
    category: "Frontend Foundations • HTML, CSS, JavaScript",
    summary:
    "Shifted from no-code tools to hand-coding websites from scratch—focusing on HTML and CSS structure in May, followed by JavaScript logic in July.",
    keyPoints: [
    "Practiced semantic HTML5, CSS Flexbox/Grid layouts, and responsive sizing.",
    "Worked with core JavaScript logic, async data handling, and DOM updates.",
     ],
    stack: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"]
  },
  {
    id: "aug-2026",
    period: "Aug 2026",
    status: "Sprint",
    title: "Hackathon Sprint & Real-Time Collaboration",
    category: "Intense Sprint • Rapid Prototyping",
    summary:
    "Collaborated with a team during an intense hackathon sprint to take a concept from idea to a working prototype on a strict deadline.",
    keyPoints: [
    "Developed and shipped responsive UI components under tight time limits.",
     "Practiced rapid debugging, team collaboration, and pitching our final product.",
    ],
    stack: ["Hackathon", "Rapid Prototyping", "Teamwork", "UI/UX"]
  },
  {
    id: "oct-2026",
    period: "Oct 2026",
    status: "Accelerated",
    title: "Modern Ecosystem & Component-Driven Architecture",
    category: "Frontend Engineering • React, Tailwind, Git",
    summary:
     "Spent my university break diving deeper into JavaScript and transitioning into component-based development with React, Tailwind CSS, and GitHub.",
    keyPoints: [
    "Styled clean, mobile-first layouts quickly with Tailwind CSS.",
    "Built modular React components using props and state management.",
    "Set up standard Git version control and repository workflows on GitHub.",
     ],
    stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Git", "GitHub"]
  },
  {
    id: "present-2026",
    period: "Present (Late 2026)",
    status: "In Progress",
    title: "Full-Stack Horizon & Scalable Architecture",
    category: "Continuous Growth • Engineering Depth",
    summary:
  "Expanding my skills beyond frontend development into backend services, databases, and API integration so I can build complete full-stack applications.",
keyPoints: [
  "Exploring backend fundamentals, database structure, and REST API connections.",
  "Focusing on better UI performance, cleaner code structure, and best practices.",
],
    stack: ["Full-Stack Architecture", "REST APIs", "Modern Tooling", "Continuous Growth"]
  }
];

export default function LearningJourney() {
  const [openId, setOpenId] = useState("present-2026");

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const [isDesktop, setIsDesktop] = useState(() => 
  typeof window !== "undefined" ? window.innerWidth >= 768 : true
  ); 

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768); 
    window.addEventListener("resize", checkScreen); 
    return () => window.removeEventListener("resize", checkScreen); 
  }, []); 

  const mobileStackBounce = {
    type: "spring", 
    stiffness: 240, 
    damping: 13, 
    mass: 1,
  }

  return (
    <motion.section
    initial={{opacity: 0, y:24}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true, amount:0.2}}
    transition={{duration: 0.6}}
    id="Journey" className="overflow-x-hidden w-full mx-auto  lg:mx-auto  px-4 py-16 text-zinc-100 lg:max-w-[80%] max-w-full">
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <div className="mt-10 lg:mx-auto   mx-1 font-mono text-gray-600 text-[0.9rem] ">
          <span>&lt;LEARNING/&gt;</span>
        </div>
        <h2 className="font-[poppins] mt-4 text-3xl font-bold lg:mx-auto mx-1  text-gray-900">
          2026 Journey &amp; Milestones
        </h2>
        <p className=" font-[poppins] text-[1rem] text-gray-700 lg:text[2rem] ml-4  mt-5 ">
          From crafting custom interfaces on Framer to architecting responsive React applications and engineering towards a full-stack horizon.
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-3.5 max-w-full lg:max-w-[80%] mx-auto  ">
        {milestones.toReversed().map((item) => {
          const isOpen = openId === item.id;

          return (
            <motion.div
            initial = {isDesktop ? {opacity: 0, x: 50} : {opacity: 0, y: 45}}
            whileInView = {isDesktop ? {opacity: 1, x: 0} : {opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition = {
              isDesktop ? {duration: 1, ease: [0.22, 1, 0.36, 1]}
              : {...mobileStackBounce, delay: item * 0.15}
            }
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white border-gray-700/40 shadow-lg shadow-teal-950/20"
                  : "bg-white border-zinc-800/80 hover:border-zinc-700 hover:bg-gray-200/50"
              }`}
            >
              {/* Clickable Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none"
              >
                <div className="space-y-2 flex-1">
                  {/* Status Badge & Period */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-lg border ${
                        item.status === "In Progress"
                          ? "bg-gray-300/20 text-black border-gray-500/30 animate-pulse"
                          : item.status === "Sprint"
                          ? "bg-gray-300/20 text-black border-gray-500/30 animate-pulse"
                          : item.status === "Accelerated"
                          ? "bg-gray-300/20 text-black border-gray-500/30 animate-pulse"
                          : "bg-black text-white border-zinc-700/70"
                      }`}
                    >
                      {item.status}
                    </span>

                    <span className="font-mono text-gray-600 text-[0.9rem] ">
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <h3
                      className={`text-base font-[poppins] lg:text-[1.1rem] sm:text-lg font-medium transition-colors duration-200 ${
                        isOpen ? "text-zinc-900" : "text-zinc-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium font-[poppins] mt-2">{item.category}</p>
                  </div>
                </div>

                {/* Minimal Micro-toggle (+ / −) */}
                <div
                  className={`mt-1 flex items-center justify-center size-8 rounded-full border border-zinc-700/60 bg-gray-300/70 text-black transition-transform duration-300 ${
                    isOpen ? "rotate-90 bg-gray-300/70 border-gray-700/40 text-black" : ""
                  }`}
                >
                  <span className="text-sm font-[poppins] leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-zinc-800/60 space-y-4">
                  <p className="text-[0.8rem] lg:[1rem] text-gray-700 leading-relaxed font-[poppins]">
                    {item.summary}
                  </p>

                  {/* Key Takeaways */}
                  <ul className="space-y-1.5 pl-1">
                    {item.keyPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-[poppins] sm:text-[13px] text-zinc-700 font-medium flex items-start gap-2"
                      >
                        <span className="text-slate-900 font-bold size-4 select-none mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-800/40">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-black/90 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
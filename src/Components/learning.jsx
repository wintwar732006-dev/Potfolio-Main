import React, { useState } from "react";

const milestones = [
  {
    id: "mar-2026",
    period: "Mar 2026",
    status: "Completed",
    title: "Visual Prototyping & Custom Layouts",
    category: "Design to Web • Framer",
    summary:
      "Embarked on web development by mastering Framer canvas. Bypassed pre-made templates to architect bespoke visual systems and shipped 4 custom interactive projects.",
    keyPoints: [
      "Designed responsive grid and layout systems directly within Framer canvas.",
      "Engineered 4 distinct, template-free custom projects from scratch."
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
      "Transitioned from visual prototyping into core engineering fundamentals. Built clean semantic structures with HTML/CSS in May, followed by deep diving into core JavaScript logic in July.",
    keyPoints: [
      "Mastered semantic HTML5 structures, modern CSS flexbox/grid, and fluid typography.",
      "Practiced imperative programming logic, asynchronous flow, and DOM manipulation in vanilla JavaScript."
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
      "Competed in a fast-paced hackathon sprint, turning conceptual requirements into functional prototypes under tight time constraints through effective team collaboration.",
    keyPoints: [
      "Architected and deployed interactive UI features under strict deadline constraints.",
      "Sharpened rapid problem-solving, cross-functional teamwork, and product pitch delivery."
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
      "Leveraged post-term university break to level up JavaScript proficiency, moving into modern component-driven engineering with Tailwind CSS, React.js, and standardized Git/GitHub workflows.",
    keyPoints: [
      "Engineered mobile-first, highly responsive web interfaces using Tailwind CSS.",
      "Built modular component hierarchies, props-driven data flows, and state handling in React.js.",
      "Established standard Git version control routines, branching strategies, and GitHub repositories."
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
      "Expanding outward from solid frontend foundations to master backend services, API designs, databases, and modern full-stack workflows to become an end-to-end builder.",
    keyPoints: [
      "Exploring scalable server architectures, database modeling, and robust RESTful API integrations.",
      "Refining component performance, code modularity, and production-grade engineering standards."
    ],
    stack: ["Full-Stack Architecture", "REST APIs", "Modern Tooling", "Continuous Growth"]
  }
];

export default function LearningJourney() {
  const [openId, setOpenId] = useState("present-2026");

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="Journey" className="w-full  lg:mx-auto  px-4 py-16 text-zinc-100 lg:max-w-[80%] max-w-full">
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <div className="mt-10 lg:mx-auto   mx-4 font-mono text-gray-600 text-[0.9rem] ">
          <span>&lt;LEARNING/&gt;</span>
        </div>
        <h2 className="font-[poppins] mt-4 text-3xl font-bold lg:mx-auto mx-2  text-gray-900">
          2026 Journey &amp; Milestones
        </h2>
        <p className=" font-[poppins] text-[1rem] text-gray-700 lg:text[2rem]  mt-5 left-0">
          From crafting custom interfaces on Framer to architecting responsive React applications and engineering towards a full-stack horizon.
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-3.5 max-w-full lg:max-w-[80%] mx-auto  ">
        {milestones.toReversed().map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
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
                          ? "bg-teal-800/20 text-teal-400 border-teal-500/30 animate-pulse"
                          : item.status === "Sprint"
                          ? "bg-amber-400/20 text-amber-400 border-amber-500/30 animate-pulse"
                          : item.status === "Accelerated"
                          ? "bg-cyan-500/20 text-cyan-500 border-cyan-500/30 animate-pulse"
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
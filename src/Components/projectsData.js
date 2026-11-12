// projectsData.js
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'

export const projects = [
  {
    id: 1, 
    title: "Coffee Shop", 
    category: "Website", 
    year: "2026", 
    description: "A sleek, responsive web app designed for effortless coffee menu exploration. Built with modern UI/UX to ensure a seamless user experience.",
    image: Project1,
    tags: ["HTML", "CSS", "JavaScript"], 
    links: {
      live: "https://wintwar732006-dev.github.io/Coffee-Shop-Website/BC/home.html", 
      githubUrl: "https://github.com/wintwar732006-dev/Coffee-Shop-Website", 
    }
  },
  {
    id: 2, 
    title: "UI Playground", 
    category: "Website", 
    year: "2026",
    description: "A live frontend sandbox to tweak UI components with real-time CSS controls. Features instant previews for custom shadows, borders, and themes.",
    image: Project2,
    tags: ["HTML", "Tailwind CSS", "JavaScript"], 
    links: {
      live: "https://ui-playground-mu.vercel.app",
      githubUrl: "https://github.com/wintwar732006-dev/TailwindCss", 
    }
  },
  {
    id: 3, 
    title: "Personal Portfolio", 
    category: "Website", 
    year: "2026", 
    description: "A minimalist portfolio inspired by Swiss typography. Showcases frontend engineering skills and featured projects with clean, accessible UI.",
    image: Project3,
    tags: ["HTML", "Tailwind CSS", "React.js"], 
    links: {
      live: "",
      githubUrl: "", 
    }
  }
];
import type { ProjectCardProps } from "../../types/ProjectCardProps";

const projects: ProjectCardProps[] = [
  {
    title: "Portfolio Website",
    description:
      "You're looking at it! My personal portfolio site, built with React, TypeScript, and PostCSS.",
    stack: ["React", "TypeScript", "PostCSS"],
    githubUrl: "https://github.com/adhSwede/portfolio",
    liveUrl: "https://portfolio-virid-five-52.vercel.app",
  },
  {
    title: "Lokkan",
    description:
      "A local-first kanban. Your plan, your data. Built with Rust and React, powered by Tauri.",
    stack: ["Rust", "React", "Tauri", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/adhSwede/Lokkan",
  },
  {
    title: "Free is Fun",
    description:
      "A free game browser using the FreeToGame API. Built with React, styled with Tailwind",
    stack: ["Vite", "React", "React Router", "Tailwind CSS", "Material Icons"],
    githubUrl: "https://github.com/adhSwede/free-is-fun",
    liveUrl: "https://free-is-fun.vercel.app/",
  },
  {
    title: "Superhero Project",
    description:
      "A collaborative React app built with a classmate on our own time. Fetches and displays superhero data using the Superhero API.",
    stack: ["React", "React Router", "Tailwind CSS", "Superhero API"],
    githubUrl: "https://github.com/WictorNisa/superhero-project",
  },
];

export default projects;

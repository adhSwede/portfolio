import type { ProjectCardProps } from "../../types/ProjectCardProps";

const projects: ProjectCardProps[] = [
  {
    title: "Portfolio Website",
    description: "My personal site built with React, TypeScript, and PostCSS.",
    stack: ["React", "TypeScript", "PostCSS"],
    githubUrl: "https://github.com/adhSwede/portfolio",
    liveUrl: "https://adhswede.dev",
  },
  {
    title: "Library System",
    description: "School project built with Spring Boot and JPA.",
    stack: ["Java", "Spring Boot", "JPA"],
    githubUrl: "https://github.com/adhSwede/spring-library-mariadb",
  },
  {
  title: "Free is Fun",
  description: "A free game browser using the FreeToGame API. Built with React, styled with Tailwind",
  stack: ["Vite", "React", "React Router", "Tailwind CSS", "Material Icons"],
  githubUrl: "https://github.com/adhSwede/free-is-fun",
  liveUrl: "https://free-is-fun.vercel.app/"
  },
  {
  title: "Superhero Project",
  description:
    "A collaborative React app built with a classmate on our own time. Fetches and displays superhero data using the Superhero API.",
  stack: ["React", "React Router", "Tailwind CSS", "Superhero API"],
  githubUrl: "https://github.com/WictorNisa/superhero-project",
}

];

export default projects;
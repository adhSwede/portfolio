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
];

export default projects;
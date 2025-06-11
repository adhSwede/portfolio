import PageContainer from "../../components/PageContainer";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard";
import projects from "./projectData";

const Projects = () => {
  return (
    <section>
      <PageContainer>
        <h1 className={styles.header}>My projects</h1>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default Projects;

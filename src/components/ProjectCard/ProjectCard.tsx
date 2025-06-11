import styles from "./ProjectCard.module.css";
import type { ProjectCardProps } from "../../types/ProjectCardProps";

const ProjectCard = ({
  title,
  description,
  stack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const targetUrl = liveUrl || githubUrl;

  return targetUrl ? (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.projectCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </a>
  ) : (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;

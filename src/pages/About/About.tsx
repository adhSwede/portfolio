import PageContainer from "../../components/PageContainer";
import styles from "./About.module.css";
import AboutCopy from "../../components/AboutCopy";

const About = () => {
  return (
    <section>
      <PageContainer>
        <h1 className={styles.header}>Hello!</h1>
        <div className={styles["content-box"]}>
          <div className={styles["portrait-container"]}>
            <img
              className={styles.portrait}
              src="src/assets/portrait.jpg"
              alt="Portrait"
            />
          </div>
          <AboutCopy />
        </div>
      </PageContainer>
    </section>
  );
};

export default About;

import styles from "./Home.module.css";
import PageContainer from "../../components/PageContainer";

const Home = () => {
  return (
    <section>
      <PageContainer>
        <div className={styles.content}>
          <h2 className={styles.nameTag}>My name is Jonas. I am</h2>
          <h1 className={styles.header}>A developer in development.</h1>
          <p>
            Welcome to my portfolio. Please use the navigation to access the
            information you need.
          </p>
        </div>
      </PageContainer>
    </section>
  );
};

export default Home;

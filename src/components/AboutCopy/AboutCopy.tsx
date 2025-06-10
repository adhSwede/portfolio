import styles from "./AboutCopy.module.css";

const AboutCopy = () => (
  <div className={styles["about-copy"]}>
    <p>
      My name is <strong>Jonas</strong>.
    </p>
    <br />
    <p>
      I'm a <strong>fullstack developer</strong> passionate
      <br /> about building clean, accessible interfaces.
    </p>
    <br />
    <p>
      In my free time, I enjoy{" "}
      <strong>exploring new coding languages and frameworks, </strong>
      tinkering with <strong>React</strong>, and drinking way too much coffee
      ☕.
    </p>
  </div>
);

export default AboutCopy;

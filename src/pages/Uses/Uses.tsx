import PageContainer from "../../components/PageContainer";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Uses.module.css";

const Uses = () => {
  const file = "/UsesCopy.md";
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load markdown");
        return res.text();
      })
      .then(setMarkdown)
      .catch(console.error);
  }, []);

  return (
    <section>
      <PageContainer>
        <h1 className={styles.header}>Uses</h1>
        <div className={styles.content}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </PageContainer>
    </section>
  );
};

export default Uses;

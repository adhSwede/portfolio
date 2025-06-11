import PageContainer from "../../components/PageContainer";
import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section>
      <PageContainer>
        <h1 className={styles.header}>Contact</h1>
        <div className={styles.content}>
          <div className="email-box">
            <span>Email me at</span>
            <div className={styles.copyRow}>
              <span>contact.jonasj@gmail.com</span>
              <button
                onClick={() => handleCopy("contact.jonasj@gmail.com", "email")}
              >
                <span className="material-symbols-outlined">
                  {copiedField === "email" ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>

          <div className="github-box">
            <span>GitHub</span>
            <div className={styles.copyRow}>
              <span>adhSwede</span>
              <button
                onClick={() =>
                  handleCopy("https://github.com/adhSwede", "github")
                }
              >
                <span className="material-symbols-outlined">
                  {copiedField === "github" ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>

          <div className="linkedin-box">
            <span>LinkedIn</span>
            <div className={styles.copyRow}>
              <span>Jonas J</span>
              <button
                onClick={() =>
                  handleCopy(
                    "https://www.linkedin.com/in/jonas-j%C3%B6nsson-57858b320/",
                    "linkedin"
                  )
                }
              >
                <span className="material-symbols-outlined">
                  {copiedField === "linkedin" ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Contact;

import type { ReactNode } from "react";
import styles from "./PageContainer.module.css";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles.pageContainer}>{children}</div>;
};

export default PageContainer;

import styles from "./NavBar.module.css";
import NavLinks from "../NavLinks";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav className={styles["inner-container"]}>
        <div className={styles.logo}>
          <Link to="/">JJ</Link>
        </div>
        <NavLinks />
      </nav>
    </header>
  );
};

export default NavBar;

import { NavLink } from "react-router";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={styles["nav-links"]}>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          PROJECTS
        </NavLink>
      </li>
      <li className={styles["hide-mobile"]}>
        <NavLink
          to="/uses"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          USES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;

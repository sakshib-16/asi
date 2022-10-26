import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={styles.dropdown}>
      {submenus?.map((submenu, index) => (
        <li key={index} className={styles.dropdown_content}>
          <Link
            to={submenu.categoryName}
            state={{ flag: "true", props: submenu.categoryName }}
            style={{ textTransform: "capitalize" }}
          >
            {submenu.categoryName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

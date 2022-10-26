import { Dropdown } from "./Dropdown";
import { useState } from "react";
import styles from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../Redux/Slices/getAllCat";
import { getCategories } from "../../services/getCategories";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

export const Menu = ({ items, id }) => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.getAllCat);

  useEffect(() => {
    getCategories().then((i) => dispatch(getCategory(i)));
  }, []);

  return (
    <li className={styles.menu_items}>
      {id == "1" ? (
        <>
          <button
            className={styles.menubtn}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onMouseOver={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            <AiFillCaretDown />
            <Dropdown submenus={data} dropdown={dropdown} />
          </button>
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

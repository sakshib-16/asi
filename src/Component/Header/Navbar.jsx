import React from "react";
import { menuItems } from "./menuItems";
import { Menu } from "./Menu";
import styles from "./header.module.css";
import { Account } from "./Account";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className={styles.menus}>
          {menuItems.map((menu, index) => {
            return <Menu items={menu} key={index} id={index} />;
          })}
          <Account />
        </ul>
      </nav>
    </>
  );
};

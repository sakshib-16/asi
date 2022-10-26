import React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
// import { Menu } from "./menuItems";
import styles from "./header.module.css";
import { Navbar } from "./Navbar";
import { Account } from "./Account";
export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Search />
      <Navbar />
    </div>
  );
};

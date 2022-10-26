import React from "react";
import footerimg from "../../assests/images/footerimg.png";
import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <div>
      <div
        className={styles.footersection}
        style={{ backgroundImage: "url(" + footerimg + ")" }}
      ></div>
      <div className={styles.copyright_text}>
        Copyrights © Content Owned by ASI, Government of India.
      </div>
    </div>
  );
};

import React from "react";
import styles from "./Or.module.css";
import line from "../../assests/images/line.svg";

export const OR = () => {
  return (
    <div className={styles.outerorbox}>
      <div className={styles.orbox}>
        <p>(OR)</p>
      </div>
      <img src={line} className={styles.orline} />
    </div>
  );
};

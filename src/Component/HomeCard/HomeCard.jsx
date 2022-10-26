import React from "react";
import styles from "./homecard.module.css";
import { Link } from "react-router-dom";

export const HomeCard = ({ title, description, image, id, category }) => {
  return (
    <div className={styles.cardbody}>
      <div
        className={styles.cardimage}
        style={{ backgroundImage: "url(" + image + ")", height: "230px" }}
      ></div>
      <div className={styles.carddesc}>
        <div className={styles.cardtitle}>{title}</div>
        <div className={styles.cardcontent}>
          <p>{description.substr(0, 80)}</p>
          <Link
            to={`/${category}/${id}`}
            state={{ categoryName: category, props: id }}
          >
            <p className={styles.cardbtn}>Read More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

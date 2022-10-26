import React from "react";
import { HomeCard } from "../../Component/HomeCard/HomeCard";
import category from "../../assests/images/category.svg";
import styles from "./category.module.css";
import backgroundimg from "../../assests/images/backgroundimg.svg";
// import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { getEpigraph } from "../../services/getEpigraph";
import { getEpi } from "../../Redux/Slices/getAllEpi";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Redux/Slices/getAllSearch";
import { useLocation } from "react-router-dom";

export const Category = () => {
  const { state } = useLocation();
  const location = useLocation();

  const cat_name = location.pathname.replace("/", "");

  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(true);
  const [catName, setCatName] = useState();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.getAllEpi);

  useEffect(() => {
    dispatch(setSearch(""));
  }, [location]);

  useEffect(() => {
    if (cat_name) {
      getEpigraph(cat_name).then((i) => dispatch(getEpi(i)));
      setCatName(cat_name);
    }
  }, [cat_name]);

  useEffect(() => {
    dispatch(setSearch(""));
  }, []);

  return (
    <>
      <div style={{ backgroundImage: "url(" + backgroundimg + ")" }}>
        <div
          className={styles.catimage}
          style={{ backgroundImage: "url(" + category + ")" }}
        ></div>
        <div className={styles.cardtitle}>
          <h1>{catName}</h1>

          <div className={styles.cardcontainer}>
            {data?.map((item, i) => {
              return (
                <>
                  <HomeCard
                    title={item.epigraphName}
                    description={item.description}
                    image={item.imageLink}
                    id={item.id}
                    category={item.categoryName}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

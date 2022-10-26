import React from "react";
import { HomeCard } from "../../Component/HomeCard/HomeCard";
import category from "../../assests/images/category.svg";
import styles from "./searchresult.module.css";
import backgroundimg from "../../assests/images/backgroundimg.svg";
// import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getEpigraph } from "../../services/getEpigraph";
import { getEpi } from "../../Redux/Slices/getAllEpi";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Redux/Slices/getAllSearch";
import { getSearch } from "../../services/getSearch";

export const Search = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const { data } = useSelector((state) => state.getAllEpi);
  const location = useLocation();

  const search = location.pathname.split("/").at(-1);
  useEffect(() => {
    if (search) {
      getSearch(search).then((i) => {
        console.log(i);
        if (i.message) {
          setMsg(i.message);

          setShowMsg(true);
          dispatch(setSearch(""));
        } else {
          dispatch(getEpi(i?.content));
          dispatch(setSearch(""));
          setShowMsg(false);
        }
      });
    }
  }, [search]);
  return (
    <>
      <div style={{ backgroundImage: "url(" + backgroundimg + ")" }}>
        <div
          className={styles.catimage}
          style={{ backgroundImage: "url(" + category + ")" }}
        ></div>
        <div className={styles.cardtitle}>
          <div className={styles.cardcontainer}>
            {!showMsg ? (
              data?.map((item, i) => {
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
              })
            ) : (
              <p style={{ textAlign: "center", width: "100%" }}>{msg}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

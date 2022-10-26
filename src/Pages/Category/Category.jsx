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
import { getSearch } from "../../services/getSearch";
import { useLocation } from "react-router-dom";

export const Category = () => {
  const { state } = useLocation();
  const location = useLocation();

  const cat_name = location.pathname.replace("/", "");
  // const cat_name = state?.props;
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(true);
  const [catName, setCatName] = useState();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.getAllEpi);
  const { search } = useSelector((state) => state.getAllSearch);
  console.log(search);

  useEffect(() => {
    dispatch(setSearch(""));
  }, [location]);

  useEffect(() => {
    if (cat_name) {
      getEpigraph(cat_name).then((i) => dispatch(getEpi(i)));
      setCatName(cat_name);
    }
    //getCat();
  }, [cat_name]);

  useEffect(() => {
    dispatch(setSearch(""));
  }, []);

  // useEffect(() => {
  //   if (search) {
  //     getSearch(search).then((i) => {
  //       if (i.message) {
  //         setMsg(i.message);
  //         // console.log(i.message);
  //         setShow(false);
  //         dispatch(setSearch(""));
  //         console.log("getting err");
  //       } else {
  //         dispatch(getEpi(i?.content));
  //         console.log("getting data", i);
  //         setShow(false);
  //         dispatch(setSearch(""));
  //       }
  //     });
  //   }
  // }, [search]);

  return (
    <>
      <div
        // className={styles.cardimage}
        style={{ backgroundImage: "url(" + backgroundimg + ")" }}
      >
        <div
          className={styles.catimage}
          style={{ backgroundImage: "url(" + category + ")" }}
        ></div>
        <div className={styles.cardtitle}>
          <h1>{catName}</h1>
          {/* {msg} */}
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

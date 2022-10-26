import React from "react";
import { HomeCard } from "../../Component/HomeCard/HomeCard";
import backgroundimg from "../../assests/images/backgroundimg.svg";
import styles from "./home.module.css";
import { Slider } from "../../Component/Slider/Slider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../Redux/Slices/getAllCat";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/getCategories";
import { Category } from "../Category/Category";
import { getSearch } from "../../services/getSearch";
import { setSearch } from "../../Redux/Slices/getAllSearch";
import { getEpi } from "../../Redux/Slices/getAllEpi";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { data } = useSelector((state) => state.getAllCat);
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState("");
  const { search } = useSelector((state) => state.getAllSearch);

  useEffect(() => {
    getCategories().then((i) => dispatch(getCategory(i)));
    setShow(true);

    dispatch(setSearch(""));
    //getCat();
  }, []);

  useEffect(() => {
    dispatch(setSearch(""));
  }, [location]);

  useEffect(() => {
    if (search) {
      getSearch(search).then((i) => {
        if (i.message) {
          setMsg(i.message);
          setShow(false);
        } else {
          dispatch(getEpi(i?.content));
          setShow(false);
        }
        dispatch(setSearch(""));
      });
    }
  }, [search]);

  return (
    <>
      <div
        // className={styles.cardimage}
        style={{ backgroundImage: "url(" + backgroundimg + ")" }}
      >
        <div className={styles.banner}>
          <Slider />
        </div>

        {data?.map((item, i) => {
          return (
            <>
              <div className={styles.cardtitle}>
                <h1>{item.categoryName}</h1>
                <div className={styles.cardcontainer}>
                  {item.epigraph?.slice(0, 3).map((card, i) => (
                    <>
                      <HomeCard
                        title={card.epigraphName}
                        description={card.description}
                        image={card.imageLink}
                        id={card.id}
                        category={item.categoryName}
                      />
                    </>
                  ))}
                </div>
                <div className={styles.viewall}>
                  <Link
                    to={item.categoryName}
                    state={{ flag: "true", props: item.categoryName }}
                  >
                    View All
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

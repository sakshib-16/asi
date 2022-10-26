import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import redfort from "../../assests/images/redfort.svg";
import prev from "../../assests/images/prev.svg";
import next from "../../assests/images/next.svg";
import styles from "./slider.module.css";
import { useEffect } from "react";
import { getBanner } from "../../services/getBanner";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../../Redux/Slices/getAllBanner";

export const Slider = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.getAllBanner);

  useEffect(() => {
    getBanner().then((i) => dispatch(getBannerData(i)));

    //getCat();
  }, []);

  const arrowPrev = {
    position: "absolute",
    top: "28em",
    bottom: "auto",
    padding: "0.4em",
    zIndex: 2,
    right: "17.3em",
    background: "#081371",
    border: "none",
    width: "50.64px",
  };
  const arrowNext = {
    position: "absolute",
    top: "28em",
    bottom: "auto",
    padding: "0.4em",
    zIndex: 2,
    right: "8.3em",
    background: "#081371",
    border: "none",
    width: "50.64px",
  };

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              ...arrowPrev,
            }}
          >
            <img src={prev} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              ...arrowNext,
            }}
          >
            <img src={next} />
          </button>
        )
      }
      statusFormatter={(current, total) => ` ${current} /  ${total}`}
    >
      {data &&
        data.map((item) => {
          return (
            <>
              <div
                className={styles.bannerimage}
                style={{ backgroundImage: "url(" + item.imageLink + ")" }}
              >
                {/* <img src={redfort} /> */}
                <span>
                  <h1> {item.title}</h1>
                  <p>{item.description}</p>
                </span>
              </div>
            </>
          );
        })}
    </Carousel>
  );
};

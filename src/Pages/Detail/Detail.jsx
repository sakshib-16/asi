import React from "react";
import backgroundimg from "../../assests/images/backgroundimg.svg";
import styles from "./detail.module.css";
import category from "../../assests/images/category.svg";
import fatehpurdetail from "../../assests/images/fatehpurdetail.svg";
import { Download } from "../../Component/Download/Download";
import documenticon from "../../assests/images/documenticon.svg";
import imageicon from "../../assests/images/imageicon.svg";
import downloadbackground from "../../assests/images/downloadbackground.svg";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/Slices/getAllDetail";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getEpiDetail } from "../../services/getEpiDetail";
import { getSearch } from "../../services/getSearch";
import { setSearch } from "../../Redux/Slices/getAllSearch";
import { getEpi } from "../../Redux/Slices/getAllEpi";

export const Detail = () => {
  const { state } = useLocation();

  const location = useLocation();

  const id = location.pathname.split("/").at(-1);
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState("");
  const { search } = useSelector((state) => state.getAllSearch);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllDetail);

  useEffect(() => {
    getEpiDetail(id).then((i) => dispatch(getDetail(i)));
    setShow(true);
    dispatch(setSearch(""));
  }, []);

  return (
    <>
      <div style={{ backgroundImage: "url(" + backgroundimg + ")" }}>
        <div
          className={styles.catimage}
          style={{ backgroundImage: "url(" + category + ")" }}
        ></div>

        <>
          <div className={styles.cardtitle}>
            <h1>{data?.categoryName}</h1>
            <div className={styles.detailcontainer}>
              <div className={styles.imagecontainer}>
                <img src={data?.imageLink} />
              </div>
              <div className={styles.description}>
                <h2>{data?.epigraphName}</h2>
                <p className={styles.scrollbar_none}>{data?.description}</p>
              </div>
            </div>
          </div>
          <div
            className={styles.downloadsection}
            style={{ backgroundImage: "url(" + downloadbackground + ")" }}
          >
            <h2>DOWNLOAD</h2>
            <div className={styles.downloaddiv}>
              <Download
                img={documenticon}
                text={data?.epigraphName}
                doc="Documentary"
                isImageLinkRequested="false"
                id={id}
              />
              <Download
                img={imageicon}
                size="12px"
                text="All Images Available HD,JPG"
                isImageLinkRequested="true"
                id={id}
              />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

import React from "react";
import backgroundimg from "../../assests/images/backgroundimg.svg";
import styles from "./about.module.css";
import category from "../../assests/images/category.svg";
import { useState, useEffect } from "react";
import { getSearch } from "../../services/getSearch";
import { getEpi } from "../../Redux/Slices/getAllEpi";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../Category/Category";
import { setSearch } from "../../Redux/Slices/getAllSearch";
import { useLocation } from "react-router-dom";
export const About = () => {
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState("");
  const { search } = useSelector((state) => state.getAllSearch);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setSearch(""));
  }, [location]);

  useEffect(() => {
    setShow(true);
    dispatch(setSearch(""));
  }, []);

  // useEffect(() => {
  //   if (search) {
  //     getSearch(search).then((i) => {
  //       if (i.message) {
  //         setMsg(i.message);
  //         setShow(false);
  //         dispatch(setSearch(""));
  //         console.log("getting err");
  //       } else {
  //         dispatch(getEpi(i?.content));
  //         dispatch(setSearch(""));
  //         setShow(false);
  //       }
  //     });
  //   }
  // }, [search]);

  return (
    <div style={{ backgroundImage: "url(" + backgroundimg + ")" }}>
      <div
        className={styles.catimage}
        style={{ backgroundImage: "url(" + category + ")" }}
      ></div>

      <>
        <div className={styles.about_body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vulputate pulvinar tincidunt. Nullam tortor nulla, dictum eu
            efficitur auctor, vestibulum nec sem. Integer laoreet vulputate
            tempor. Aenean tincidunt nulla lacus, non accumsan augue elementum
            ac. Curabitur nec tempus diam, quis cursus turpis. Fusce justo dui,
            mollis a arcu sed, iaculis fermentum dui. Fusce auctor elit nec
            dictum pretium. Maecenas luctus nunc at dolor molestie, mollis
            aliquam purus commodo. Fusce a eros id sem dignissim vulputate non
            eu sem. Curabitur vestibulum sagittis efficitur. Mauris laoreet
            nulla mattis ante egestas sodales. Aenean dapibus eros erat, eget
            iaculis nunc aliquet eget. Sed eget tempor augue. Nunc at dignissim
            neque. Morbi fringilla ultricies sapien, sed euismod enim congue
            quis. Nullam vel odio id nunc porta ultrices. Etiam libero nisl,
            ornare semper lacinia sit amet, efficitur nec urna. Quisque bibendum
            a turpis et tincidunt. Aenean ut dapibus quam. Donec orci libero,
            placerat ut augue et, aliquam vestibulum mauris. Aliquam erat
            volutpat. In ut fringilla nisl, nec semper sem. Mauris leo ipsum,
            finibus sed mi ut, pharetra fringilla enim. Aliquam mollis eu turpis
            eu ultrices. In id feugiat mi, eu imperdiet purus. Maecenas
            elementum mauris ut augue aliquet, non malesuada augue sodales. Nam
            tristique felis et libero suscipit sagittis. Suspendisse dapibus
            lectus vel dapibus tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vulputate pulvinar tincidunt. Nullam tortor nulla, dictum eu
            efficitur auctor, vestibulum nec sem. Integer laoreet vulputate
            tempor. Aenean tincidunt nulla lacus, non accumsan augue elementum
            ac. Curabitur nec tempus diam, quis cursus turpis. Fusce justo dui,
            mollis a arcu sed, iaculis fermentum dui. Fusce auctor elit nec
            dictum pretium. Maecenas luctus nunc at dolor molestie, mollis
            aliquam purus commodo. Fusce a eros id sem dignissim vulputate non
            eu sem. Curabitur vestibulum sagittis efficitur. Mauris laoreet
            nulla mattis ante egestas sodales. Aenean dapibus eros erat, eget
            iaculis nunc aliquet eget. Sed eget tempor augue. Nunc at dignissim
            neque. Morbi fringilla ultricies sapien, sed euismod enim congue
            quis. Nullam vel odio id nunc porta ultrices. Etiam libero nisl,
            ornare semper lacinia sit amet, efficitur nec urna. Quisque bibendum
            a turpis et tincidunt. Aenean ut dapibus quam. Donec orci libero,
            placerat ut augue et, aliquam vestibulum mauris. Aliquam erat
            volutpat. In ut fringilla nisl, nec semper sem. Mauris leo ipsum,
            finibus sed mi ut, pharetra fringilla enim. Aliquam mollis eu turpis
            eu ultrices. In id feugiat mi, eu imperdiet purus. Maecenas
            elementum mauris ut augue aliquet, non malesuada augue sodales. Nam
            tristique felis et libero suscipit sagittis. Suspendisse dapibus
            lectus vel dapibus tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vulputate pulvinar tincidunt. Nullam tortor nulla, dictum eu
            efficitur auctor, vestibulum nec sem. Integer laoreet vulputate
            tempor. Aenean tincidunt nulla lacus, non accumsan augue elementum
            ac. Curabitur nec tempus diam, quis cursus turpis. Fusce justo dui,
            mollis a arcu sed, iaculis fermentum dui. Fusce auctor elit nec
            dictum pretium. Maecenas luctus nunc at dolor molestie, mollis
            aliquam purus commodo. Fusce a eros id sem dignissim vulputate non
            eu sem. Curabitur vestibulum sagittis efficitur. Mauris laoreet
            nulla mattis ante egestas sodales. Aenean dapibus eros erat, eget
            iaculis nunc aliquet eget. Sed eget tempor augue. Nunc at dignissim
            neque. Morbi fringilla ultricies sapien, sed euismod enim congue
            quis. Nullam vel odio id nunc porta ultrices. Etiam libero nisl,
            ornare semper lacinia sit amet, efficitur nec urna. Quisque bibendum
            a turpis et tincidunt. Aenean ut dapibus quam. Donec orci libero,
            placerat ut augue et, aliquam vestibulum mauris. Aliquam erat
            volutpat. In ut fringilla nisl, nec semper sem. Mauris leo ipsum,
            finibus sed mi ut, pharetra fringilla enim. Aliquam mollis eu turpis
            eu ultrices. In id feugiat mi, eu imperdiet purus. Maecenas
            elementum mauris ut augue aliquet, non malesuada augue sodales. Nam
            tristique felis et libero suscipit sagittis. Suspendisse dapibus
            lectus vel dapibus tempor.
          </p>
        </div>
      </>
    </div>
  );
};

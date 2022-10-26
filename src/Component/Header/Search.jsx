import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getSearch } from "../../services/getSearch";
import styles from "./header.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpi } from "../../Redux/Slices/getAllEpi";
import { setSearch } from "../../Redux/Slices/getAllSearch";
import { useNavigate, useLocation } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  const { search } = useSelector((state) => state.getAllSearch);

  const searchBtn = () => {
    if (searchData.length < 3) {
      setMsg("Please enter at least 3 character");
    } else {
      dispatch(setSearch(searchData));
      navigate(`/search/${searchData}`);
      setMsg("");
    }
  };

  const location = useLocation();

  useEffect(() => {
    setSearchData("");
    setMsg("");
  }, [location]);
  return (
    <>
      <div className={styles.search_div}>
        <div className={styles.search_bar}>
          <input
            minlength="3"
            type="search"
            placeholder="Search..."
            value={searchData}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className={styles.search_btn}
            onClick={searchBtn}
          >
            <AiOutlineSearch />
          </button>
        </div>
        <span>{msg}</span>
      </div>
    </>
  );
};

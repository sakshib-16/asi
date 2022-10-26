import React from "react";
import signupimg from "../../assests/images/signupimg.svg";
import { OR } from "../OR/OR";
import { Link } from "react-router-dom";
import styles from "./signupimage.module.css";
import { getLogin } from "../../Redux/Slices/getLoginForm";
import { useDispatch, useSelector } from "react-redux";

export const SignupImage = () => {
  const dispatch = useDispatch();
  const hideSignup = () => {
    dispatch(getLogin(true));
  };
  const { show } = useSelector((state) => state.getLoginForm);

  return (
    <div className={styles.signup_img}>
      <img src={signupimg} />
      {!show && (
        <>
          <OR />
          <div className={styles.textbox}>
            <p>
              Already Registered? <button onClick={hideSignup}> Sign In</button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

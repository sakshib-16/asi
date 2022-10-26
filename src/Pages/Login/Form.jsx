import React from "react";
import { useState } from "react";
import styles from "./signup.module.css";

export const Form = ({ login }) => {
  console.log(login);
  const [isVisible, setVisible] = useState(false);
  const [isCVisible, setCVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!isVisible);
  };
  const toggleCPassword = () => {
    setCVisible(!isCVisible);
  };

  return (
    <>
      {!login && (
        <div>
          <img src={user} />
          <input type="name" placeholder="Full Name" />
        </div>
      )}
      {!login && (
        <div>
          <img src={phone} />
          <input type="number" placeholder="Phone Number" />
        </div>
      )}
      <div>
        <img src={email} />
        <input type="email" placeholder="Email Address" />
      </div>

      <div>
        <img src={lock} />
        <span className={styles.inputgroupbtn} onClick={togglePassword}>
          {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
        <input type={!isVisible ? "password" : "text"} placeholder="Password" />
      </div>
      {!login && (
        <div>
          <img src={lock} />
          <span className={styles.inputgroupbtn} onClick={toggleCPassword}>
            {isCVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <input
            type={!isCVisible ? "password" : "text"}
            placeholder="Confirm Password"
          />
        </div>
      )}
    </>
  );
};

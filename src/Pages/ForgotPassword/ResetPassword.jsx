import React from "react";
import { useState } from "react";
import styles from "./reset.module.css";
import email from "../../assests/images/email.svg";
import lock from "../../assests/images/lock.svg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import signupimg from "../../assests/images/signupimg.svg";
import { useLocation } from "react-router-dom";
import axios from "../../config/axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [formData, setFormData] = useState({
    emailId: "",
    newPassword: "",
  });
  const [isVisible, setVisible] = useState(false);
  const [msg, setmsg] = useState();
  const location = useLocation();
  const resettoken = location.pathname.split("/").at(-1);
  const navigate = useNavigate();

  const togglePassword = () => {
    setVisible(!isVisible);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/v1/asi/reset/${resettoken}`, formData);

      if (res.status === 200) {
        if (res.data) {
          setmsg(res.data);
          toast.success("Password Updated Successfully.", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
          });
          setTimeout(() => navigate("/"), 5000);
        }
        //else {
        //     ctx.auth({ ...res.data, isLoggedIn: true });

        //     props.setIsOpen(false);
        //     document.body.style.overflow = "unset";

        //   }
        // }
      }
    } catch (error) {
      setmsg("Token is Invalid");
      console.log("Error", error);
    }
  };

  return (
    <div className={styles.signupcontainer}>
      {/* <SignupImage /> */}
      <div className={styles.signup_img}>
        <img src={signupimg} />
      </div>

      <div className={styles.inputbox}>
        <h2> Reset Password</h2>
        <form>
          <div className={styles.inputcontainer}>
            <div className={styles.required}>
              <img src={email} />
              <input
                type="email"
                placeholder="Email Address"
                name="emailId"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.required}>
              <img src={lock} />
              <span className={styles.inputgroupbtn} onClick={togglePassword}>
                {isVisible ? (
                  <AiOutlineEye style={{ color: "#000000" }} />
                ) : (
                  <AiOutlineEyeInvisible style={{ color: "#000000" }} />
                )}
              </span>
              <input
                type={!isVisible ? "password" : "text"}
                placeholder="Password"
                name="newPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <p className={styles.errormsg}> {msg}</p>
            <button
              className={styles.submitbtn}
              type="submit"
              onClick={resetPassword}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>

      {/* <Login /> */}
    </div>
  );
};

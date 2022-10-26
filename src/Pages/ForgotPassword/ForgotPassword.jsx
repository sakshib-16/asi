import React from "react";
import { useState } from "react";
import signupimg from "../../assests/images/signupimg.svg";
import styles from "./signup.module.css";
import email from "../../assests/images/email.svg";
import lock from "../../assests/images/lock.svg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { OR } from "../../Component/OR/OR";
import axios from "../../config/axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { useContext } from "react";
import { getLogin } from "../../Redux/Slices/getLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { emailValidate } from "../../config/validate";
export const Login = (props) => {
  const ctx = useContext(AuthContext);

  const [isVisible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [nameErr, setNameErr] = useState();
  const [msg, setmsg] = useState();

  const location = useLocation();

  const togglePassword = () => {
    setVisible(!isVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailvalidate = (e) => {
    if (e.target.value != "") {
      const check = emailValidate(e.target.value);
      if (check !== true) setNameErr("Enter valid Email Address");
      else setNameErr("");
    } else {
      setNameErr("");
    }
  };

  const forgotpassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/v1/asi/reset/${email}`);

      if (res.status === 200) {
        if (res.data.message) {
          setmsg(res.data.details[0]);
        } else {
          //   ctx.auth({ ...res.data, isLoggedIn: true });
          //   props.setIsOpen(false);
          //   document.body.style.overflow = "unset";
          // navigate("/login");
          // if (res?.data?.data?.token) {
          //   ctx.auth({
          //     ...res.data.data,
          //     role: "client",
          //     is_loggedin: true,
          //   });
          // }
        }
      }
    } catch (error) {
      //   setmsg("Email or Password is Incorrect");
      console.log("Error", error);
    }
  };

  return (
    <div className={styles.inputbox}>
      <h2>Forgot Password</h2>
      <form onSubmit={forgotpassword}>
        <div className={styles.inputcontainer}>
          <div className={styles.required}>
            <img src={email} />
            <input
              type="email"
              placeholder="Email Address"
              name="userName"
              onChange={(e) => {
                emailvalidate(e);
                handleChange(e);
              }}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter Email Address");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
            />
          </div>

          <p className={styles.errormsg}>{nameErr}</p>
          <p className={styles.errormsg}> {msg}</p>

          <button className={styles.submitbtn} type="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        <OR />
      </div>
    </div>
  );
};

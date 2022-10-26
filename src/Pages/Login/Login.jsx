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
import AuthContext from "../../Auth/AuthContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Login = (props) => {
  const ctx = useContext(AuthContext);

  const [isVisible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [nameErr, setNameErr] = useState();
  const [msg, setmsg] = useState();
  const [showemail, setShowEmail] = useState(false);

  const location = useLocation();

  const togglePassword = () => {
    setVisible(!isVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginAccount = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/v1/asi/auth/user-login", formData);

      if (res.status === 200) {
        if (res.data.message) {
          setmsg(res.data.details[0]);
        } else {
          ctx.auth({ ...res.data, isLoggedIn: true });
          toast.success("Logged In Successfully.", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
          });
          props.setIsOpen(false);
          document.body.style.overflow = "unset";
        }
      }
    } catch (error) {
      setmsg("Invalid Email or Password ");
      console.log("Error", error);
    }
  };

  const forgotPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`/v1/asi/reset/${formData.userName}`);

      if (res.status === 200) {
        if (res.data) {
          setmsg(res.data);
          //   } else {
          //     ctx.auth({ ...res.data, isLoggedIn: true });

          //     props.setIsOpen(false);
          //     document.body.style.overflow = "unset";
          //   }
          // }
        }
      }
    } catch (error) {
      setmsg("Invalid Email or Password ");
      console.log("Error", error);
    }
  };
  const showforgot = () => {
    setShowEmail(true);
  };
  return (
    <div className={styles.inputbox}>
      <h2>{!showemail ? props.title : "Forgot Password"}</h2>
      <form>
        <div className={styles.inputcontainer}>
          <div className={styles.required}>
            <img src={email} />
            <input
              type="email"
              placeholder="Email Address"
              name="userName"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          {!showemail && (
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
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
          )}
          {!showemail && (
            <button onClick={showforgot} className={styles.forgotbtn}>
              <p className={styles.fpass}>forgot password</p>
            </button>
          )}
          <p className={styles.errormsg}>{nameErr}</p>
          <p className={styles.errormsg}> {msg}</p>
          {!showemail ? (
            <button
              className={styles.submitbtn}
              type="submit"
              onClick={loginAccount}
            >
              Log In
            </button>
          ) : (
            <button
              className={styles.submitbtn}
              type="submit"
              onClick={forgotPassword}
            >
              Forgot Password
            </button>
          )}
        </div>
      </form>
      {!showemail && (
        <>
          <div>
            <OR />
          </div>
          <div className={styles.textbox} style={{ marginTop: "80px" }}>
            <p>
              Don't have an account?
              <button
                onClick={() => props.setShowLogin(false)}
                style={{ color: "#2867d9" }}
              >
                Create an Account
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

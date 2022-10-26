import React from "react";
import styles from "./signup.module.css";
import signupimg from "../../assests/images/signupimg.svg";
import { OR } from "../../Component/OR/OR";
import user from "../../assests/images/user.svg";
import phone from "../../assests/images/phone.svg";
import email from "../../assests/images/email.svg";
import lock from "../../assests/images/lock.svg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "../../config/axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { useContext } from "react";
import { SignupImage } from "../../Component/SignupImage/SignupImage";
import {
  nameValidate,
  phoneValidate,
  emailValidate,
  passwordValidate,
} from "../../config/validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = (props) => {
  const ctx = useContext(AuthContext);
  const [isVisible, setVisible] = useState(false);
  const [isCVisible, setCVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: [
      {
        name: "ROLE_USER",
      },
    ],
  });
  const navigate = useNavigate();

  const [msg, setmsg] = useState();
  const [passmsg, setPassmsg] = useState();

  const [cpassword, setCpassword] = useState();
  const [nameErr, setNameErr] = useState();
  const [phoneErr, setPhoneErr] = useState();

  const [emailErr, setEmailErr] = useState();

  const [passErr, setPassErr] = useState();

  const togglePassword = () => {
    setVisible(!isVisible);
  };
  const toggleCPassword = () => {
    setCVisible(!isCVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    e.target.setCustomValidity("");
  };

  const createAccount = async (e) => {
    e.preventDefault();

    if (formData.password != cpassword) {
      setPassmsg("Password do not match");
      return;
    }
    if (nameErr == "" && phoneErr == "" && emailErr == "" && passErr == "") {
      try {
        const res = await axios.post("/v1/asi/auth/user-signup", formData);

        if (res.status === 200) {
          if (res.data.message) {
            setmsg(res.data.message);
          } else {
            ctx.auth({ ...res.data, isLoggedIn: true });
            toast.success("User has been Registered Successfully.", {
              position: toast.POSITION.TOP_RIGHT,
              className: "toast-message",
            });
            // setmsg("User Registered");
            props.setIsOpen(false);

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
        console.log("Error", error);
      }
    } else {
      console.log("Error");
    }
  };
  const namevalidate = (e) => {
    if (e.target.value != "") {
      const check = nameValidate(e.target.value);
      if (check !== true) setNameErr("Enter valid letters");
      else setNameErr("");
    } else {
      setNameErr("");
    }
  };
  const phonevalidate = (e) => {
    if (e.target.value != "") {
      const check = phoneValidate(e.target.value);
      if (check !== true) setPhoneErr("Enter 10 digit valid Phone Number");
      else setPhoneErr("");
    } else {
      setPhoneErr("");
    }
  };
  const emailvalidate = (e) => {
    if (e.target.value != "") {
      const check = emailValidate(e.target.value);
      if (check !== true) setEmailErr("Enter valid Email Address");
      else setEmailErr("");
    } else {
      setEmailErr("");
    }
  };

  const passwordvalidate = (e) => {
    if (e.target.value != "") {
      const check = passwordValidate(e.target.value);
      if (check !== true)
        setPassErr(
          "Password must contain min 8 character, 1 uppercase, 1 special character and 1 numeric"
        );
      else setPassErr("");
    } else {
      setPassErr("");
    }
  };

  return (
    <div className={styles.inputbox}>
      <h2>SIGN UP</h2>
      <form onSubmit={createAccount}>
        <div className={styles.inputcontainer}>
          <>
            <div className={styles.required}>
              <img src={user} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                // pattern="^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$"
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please enter your Full name");
                }}
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                onChange={(e) => {
                  namevalidate(e);
                  handleChange(e);
                }}
              />
            </div>
            <div className={styles.required}>
              <img src={phone} />
              <input
                type="text"
                name="phoneNumber"
                required
                placeholder="Phone Number"
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please enter Phone Number");
                }}
                maxlength="10"
                onChange={(e) => {
                  phonevalidate(e);
                  handleChange(e);
                }}
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                // disabled={(nameErr && true) || false}
              />
            </div>
            <div className={styles.required}>
              <img src={email} />
              <input
                type="text"
                name="email"
                required
                placeholder="Email Address"
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please enter Email Address");
                }}
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                onChange={(e) => {
                  emailvalidate(e);
                  handleChange(e);
                }}
                // disabled={(phoneErr && true) || false}
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
                name="password"
                placeholder="Password"
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please enter Password");
                }}
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                onChange={(e) => {
                  passwordvalidate(e);
                  handleChange(e);
                }}
                // disabled={(emailErr && true) || false}
              />
            </div>
            <div className={styles.required}>
              <img src={lock} />
              <span className={styles.inputgroupbtn} onClick={toggleCPassword}>
                {isCVisible ? (
                  <AiOutlineEye style={{ color: "#000000" }} />
                ) : (
                  <AiOutlineEyeInvisible style={{ color: "#000000" }} />
                )}
              </span>
              <input
                type={!isCVisible ? "password" : "text"}
                name="cpassword"
                placeholder="Confirm Password"
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please enter Password");
                }}
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                onChange={(e) => {
                  passwordvalidate(e);
                  setCpassword(e.target.value);
                }}
              />
            </div>
            <p className={styles.errormsg}>{passmsg}</p>
            <p className={styles.errormsg}>{nameErr}</p>
            <p className={styles.errormsg}>{phoneErr}</p>
            <p className={styles.errormsg}>{emailErr}</p>
            <p className={styles.errormsg}>{passErr}</p>

            <p className={styles.errormsg}> {msg}</p>
          </>
          <button className={styles.submitbtn} type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

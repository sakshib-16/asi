import React, { useEffect, useState } from "react";
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { Signup } from "../../Pages/Login/Signup";
import { Login } from "../../Pages/Login/Login";
import { SignupImage } from "../SignupImage/SignupImage";
import { useSelector } from "react-redux";
import signupimg from "../../assests/images/signupimg.svg";
import { OR } from "../OR/OR";

const Modal = ({ setIsOpen }) => {
  const [showLogin, setShowLogin] = useState(false);
  //   const { show } = useSelector((state) => state.getLoginForm);

  useEffect(() => {
    setShowLogin(false);
  }, []);

  //   useEffect(() => {
  //     hideSignup();
  //   }, [showLogin]);

  const hideSignup = () => {
    setShowLogin(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setShowLogin(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          {/* <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div> */}
          <button className={styles.closeBtn} onClick={closeModal}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.signupcontainer}>
            {/* <SignupImage /> */}
            <div className={styles.signup_img}>
              <img src={signupimg} />
              {!showLogin && (
                <>
                  <OR />
                  <div className={styles.textbox}>
                    <p>
                      Already Registered?
                      <button onClick={hideSignup} style={{ color: "#2867d9" }}>
                        Sign In
                      </button>
                    </p>
                  </div>
                </>
              )}
            </div>

            {!showLogin ? (
              <Signup setShowLogin={setShowLogin} setIsOpen={setIsOpen} />
            ) : (
              <Login
                setShowLogin={setShowLogin}
                setIsOpen={setIsOpen}
                title="Login"
              />
            )}

            {/* <Login /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React from "react";
import user from "../../assests/images/user.svg";
import { useAuth } from "../../Auth/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Account = () => {
  const ctx = useAuth();
  const navigate = useNavigate();

  const loggedInUser = ctx?.loginUser?.isLoggedIn;
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showLogin = () => {
    setShow(true);
  };
  const onLogout = () => {
    ctx.logout();
    toast.success("User has been logged out", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
    setShow(false);
  };
  const onLogin = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <li>
        {!loggedInUser ? (
          <div onClick={onLogin} style={{ width: "50px" }}>
            <img src={user} />
          </div>
        ) : (
          <>
            <div
              onClick={showLogin}
              className={styles.logouthidediv}
              style={{ width: "50px" }}
            >
              <img src={user} />
              <div onClick={onLogout} className={styles.logouthide}>
                Logout
              </div>
            </div>
          </>
        )}
      </li>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
};

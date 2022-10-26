import React from "react";
import styles from "./download.module.css";
import documenticon from "../../assests/images/documenticon.svg";
import { getDownload } from "../../services/getDownload";
import { useAuth } from "../../Auth/AuthProvider";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Download = ({
  img,
  size,
  click,
  text,
  doc,
  id,
  isImageLinkRequested,
}) => {
  const ctx = useAuth();

  const data = {
    epigraphId: id,
    email: ctx?.loginUser?.email,
    isImageLinkRequested: isImageLinkRequested,
  };
  const [isOpen, setIsOpen] = useState(false);

  const loggedInUser = ctx?.loginUser?.isLoggedIn;

  const sendMail = () => {
    if (loggedInUser) {
      getDownload(data).then((res) =>
        toast.success("Link has been shared to registered Email Id.", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        })
      );
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <div className={styles.downloadbox}>
        <div className={styles.imagebox}>
          <img src={img} style={{ marginLeft: size }} />
        </div>
        <div className={styles.textbox}>
          <p>
            {text} &nbsp;
            {doc}
          </p>
          <button className={styles.downloadbtn} onClick={sendMail}>
            Download
          </button>
        </div>
      </div>
    </>
  );
};

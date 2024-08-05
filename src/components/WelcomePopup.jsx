import React, { useState } from "react";
import ComingSoonPopupStyles from "../styles/ComingSoonPopup.module.css";
import aboutStatsStyles from "../styles/AboutStats.module.css";
import footerStyles from "../styles/Footer.module.css";
import utils from "../styles/utils.module.css";
import { IoMdClose } from "react-icons/io";
import { usePopup } from "../context/PopupContext";
import popupImg from "../assets/WelcomePopup/hero_img.jpg";
import popupImg2 from "../assets/WelcomePopup/hero_img_2.png";
import styles from "../styles/WelcomePopup.module.css";
import axios from "axios";
import { SERVER_URI } from "../main";
import toast from "react-hot-toast";

const WelcomePopup = () => {
  const { welcomePopup, toggleWelcomePopup } = usePopup();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loc, setLoc] = useState("");
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    sendEmailData();
  };

  const sendEmailData = async () => {
    try {
      const { data } = await axios.post(`${SERVER_URI}/api/add_email`, {
        name,
        email,
        purpose: "Aarambh Registration",
      });

      if (data.status) {
        toast.success(data.message);
        setIsSubmitted(true);
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      // if (e.response.data.message) {
      //   toast.error(e.response.data.message);
      // }
      console.log(e);
    }
  };

  return (
    <div className={ComingSoonPopupStyles.popupWrapper}>
      <div className={ComingSoonPopupStyles.popupBackdrop}>
        <div
          className={`${ComingSoonPopupStyles.popupDiv} ${styles.popupDiv} ${
            isSubmitted && styles.popupDivPadding
          }`}
        >
          {isSubmitted && (
            <div
              className={`${ComingSoonPopupStyles.closeDiv} ${styles.closeDivExtra}`}
            >
              <IoMdClose onClick={() => toggleWelcomePopup()} />
            </div>
          )}
          {!isSubmitted ? (
            <div className={styles.popupMainContent}>
              <div className={styles.popupImgDiv}>
                <img
                  src={popupImg}
                  alt="popupImg"
                  className={`${styles.popupImg} ${styles.popupImg1}`}
                />
                <img
                  src={popupImg2}
                  alt="popupImg"
                  className={`${styles.popupImg} ${styles.popupImg2}`}
                />
              </div>
              <div className={styles.popupContentDiv}>
                <div
                  className={`${ComingSoonPopupStyles.closeDiv} ${styles.closeDivExtra}`}
                >
                  <IoMdClose onClick={() => toggleWelcomePopup()} />
                </div>
                <p
                  className={`${aboutStatsStyles.aboutStatsHeader} ${styles.popupHeading} ${utils.s24}`}
                >
                  Embark on Your Wellness Journey
                </p>
                <p className={styles.popupSubheading}>
                  Join 'Aarambh'—Our Free Introductory Yoga Program
                </p>
                <p className={styles.popupDesc}>
                  Start your path to well-being with 'Aarambh', a free session
                  designed to introduce the fundamentals of yoga.This session
                  will guide you towards strength, flexibility, stability, and
                  mental calmness.
                </p>
                <div className={styles.popupPoints}>
                  <div className={styles.popupPoint}>
                    <p>Om Chanting & Yogic Breathing</p>
                  </div>
                  <div className={styles.popupPoint}>
                    <p>Essential Joint Movements & Asana Alignments</p>
                  </div>
                  <div className={styles.popupPoint}>
                    <p>Introduction to Dynamic Suryanamaskar</p>
                  </div>
                  <div className={styles.popupPoint}>
                    <p>Meditative Savasana to Conclude the Session</p>
                  </div>
                </div>
                <form onSubmit={submitHandler} className={styles.form}>
                  <div
                    className={`${footerStyles.footerInputButtons} ${ComingSoonPopupStyles.input_button} ${styles.formMainDiv}`}
                  >
                    <div className={styles.inputDiv}>
                      <input
                        type="name"
                        placeholder="Enter your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      {errors?.name && (
                        <p className={utils.errors}>{errors?.name}</p>
                      )}
                    </div>
                    <div className={styles.inputDiv}>
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      {errors?.email && (
                        <p className={utils.errors}>{errors?.email} </p>
                      )}
                    </div>
                    <div className={styles.submitDiv}>
                      <button
                        className={`${utils.btn2} ${ComingSoonPopupStyles.doneBtn}`}
                      >
                        <p>Register now for free</p>
                      </button>
                      <p className={utils.s14}>
                        Your journey is personal. We respect your privacy and
                        ensure your data is secure with us.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <p className={aboutStatsStyles.aboutStatsHeader}>
              {" "}
              Stay tuned for exciting updates, Team Shoonya Life will reach out
              to you
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;

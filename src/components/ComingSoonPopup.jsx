import React, { useState } from "react";
import styles from "../styles/ComingSoonPopup.module.css";
import aboutStatsStyles from "../styles/AboutStats.module.css";
import footerStyles from "../styles/Footer.module.css";
import utils from "../styles/utils.module.css";
import { IoMdClose } from "react-icons/io";
import { usePopup } from "../context/PopupContext";
import axios from "axios";
import { SERVER_URI } from "../main";
import toast from "react-hot-toast";

const ComnigSoonPopup = () => {
  const { popupState, togglePopup } = usePopup();
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
        email,
        purpose: "Email captured at coming soon popup",
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
    <div className={styles.popupWrapper}>
      <div className={styles.popupBackdrop}>
        <div className={styles.popupDiv}>
          <div className={styles.closeDiv}>
            <IoMdClose onClick={() => togglePopup()} />
          </div>
          {!isSubmitted ? (
            <>
              <p
                className={`${aboutStatsStyles.aboutStatsHeader} ${utils.s24}`}
              >
                Something Exciting is coming your way.
              </p>
              <p>
                Stay tuned with latest updates by providing following details
              </p>
              <form onSubmit={submitHandler}>
                <div
                  className={`${footerStyles.footerInputButtons} ${styles.input_button}`}
                >
                  <div className={styles.name_email}>
                    <div className={styles.errorWrapper}>
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
                    <div className={styles.errorWrapper}>
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
                  </div>
                  <input
                    className={styles.locationInput}
                    type="text"
                    name="location"
                    placeholder="Enter your location (optional)"
                    onChange={(e) => setLoc(e.target.value)}
                    value={loc}
                  />
                  <button className={`${utils.btn2} ${styles.doneBtn}`}>
                    <p>Subscribe</p>
                  </button>
                </div>
              </form>
            </>
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

export default ComnigSoonPopup;

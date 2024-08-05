import React, { useEffect, useState } from "react";
import ComingSoonPopupStyles from "../styles/ComingSoonPopup.module.css";
import aboutStatsStyles from "../styles/AboutStats.module.css";
import { IoMdClose } from "react-icons/io";
import { usePopup } from "../context/PopupContext";
import applicationFormStyles from "../styles/ApplicationFormPage.module.css";
import submitImg from "../assets/TeacherHomePage/submit_img.png";
import { useNavigate } from "react-router-dom";

const ApplicationSubmissionPopup = () => {
  const { successsPopupState, toggleSuccessPopup } = usePopup();
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/home");
      toggleSuccessPopup();
    }
  }, [count, navigate, toggleSuccessPopup]);

  return (
    <div className={ComingSoonPopupStyles.popupWrapper}>
      <div className={ComingSoonPopupStyles.popupBackdrop}>
        <div className={ComingSoonPopupStyles.popupDiv}>
          <div className={ComingSoonPopupStyles.closeDiv}>
            <IoMdClose onClick={() => toggleSuccessPopup()} />
          </div>
          <div className={applicationFormStyles.submitImgDiv}>
            <img src={submitImg} alt="submit_img" />
          </div>
          <p className={aboutStatsStyles.aboutStatsHeader}>
            Applied Successfully!
          </p>
          <p>
            Team Shoonya Life will reach out to you within 1-2 business days,
            please stay tuned and lookout for the approval in your inbox
          </p>
          <p className={applicationFormStyles.countdownTxt}>
            You will be redirected to home page in {count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmissionPopup;

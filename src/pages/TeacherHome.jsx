import React from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import styles from "../styles/TeacherHome.module.css";
import utils from "../styles/utils.module.css";
import yogaLady1 from "../assets/TeacherHomePage/yoga_lady_1.png";
import dollarIcon from "../assets/TeacherHomePage/dollar_icon.svg";
import videoIcon from "../assets/TeacherHomePage/video_icon.svg";
import clockIcon from "../assets/TeacherHomePage/clock_icon.svg";
import yogaLady2 from "../assets/TeacherHomePage/yoga_lady_2.png";
import teacherHomeStyles from "../styles/TeacherHome.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { usePopup } from "../context/PopupContext";

const TeacherHome = () => {
  const {
    toggleTeacherLoginPopup,
    toggleContactPopupState,
    welcomePopup,
    toggleWelcomePopup,
  } = usePopup();

  return (
    <>
      <div className="py-24 2xl:py-28">
        <div className={landingPageStyles.hero}>
          <div className={landingPageStyles.heroWrapper}>
            <div className={styles.headerSection}>
              <div className={styles.headerSectionLeft}>
                <p className={`${utils.s56} ${styles.heading}`}>
                  Join Shoonya Life to broaden your teaching horizons and enrich
                  the yoga community.
                </p>
                <p className={styles.subheading}>
                  If you are a yoga teacher then teach with shoonya
                </p>
                <div className={styles.headerBtns}>
                  <Link to={"/applicationform"} className={styles.applyLink}>
                    <button className={utils.btn2}>Apply for Program</button>
                  </Link>
                  {/* <button className={utils.btn1} onClick={toggleTeacherLoginPopup}><p>Login</p></button> */}
                </div>
              </div>
              <div className={styles.headerSectionRight}>
                <img src={yogaLady1} alt="yoga_lady" />
              </div>
            </div>
            <div className={styles.stepsSection}>
              <p className={styles.stepSectionHeading}>How it works</p>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <img src={dollarIcon} alt="dollar_icon" />
                  <p className={styles.stepsHeading}>
                    Register and Complete Your Profile
                  </p>
                  <p className={styles.stepsSubheading}>
                    Sign up and fill out your details along with a questionnaire
                    to begin your journey with us. This initial step helps us
                    understand your background, skills, and specific yoga
                    expertise.
                  </p>
                </div>
                <div className={styles.step}>
                  <img src={videoIcon} alt="dollar_icon" />
                  <p className={styles.stepsHeading}>
                    Undergo Our Vetting Process
                  </p>
                  <p className={styles.stepsSubheading}>
                    Our selection process involves a thorough vetting of your
                    qualifications and teaching style to ensure a good fit
                    within our community. This step maintains high standards and
                    aligns instructors with participants' needs.
                  </p>
                </div>
                <div className={styles.step}>
                  <img src={clockIcon} alt="dollar_icon" />
                  <p className={styles.stepsHeading}>Teach Your First Class</p>
                  <p className={styles.stepsSubheading}>
                    Once approved, you are all set to schedule and conduct your
                    first class. This is your opportunity to engage with our
                    community and share your yoga practice, inspiring wellness
                    and balance.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.benefitSection} ${styles.stepsSection}`}>
              <div className={styles.benefitSectionWrapper}>
                {/* <p className={styles.benefitSubheading1}>Main feature</p> */}
                <p
                  className={`${utils.s48} ${utils.sw500} ${styles.benefitHeading}`}
                >
                  Expand Your Teaching Horizons
                </p>
                <p className={`${styles.benefitSubheading2} ${utils.s18}`}>
                  Join Shoonya Life - Amplify Your Impact: Unlock the
                  opportunity to broaden your reach and enhance your teaching
                  capabilities with Shoonya. By joining our platform, you gain
                  access to a vast network of yoga enthusiasts seeking authentic
                  experiences, providing you a unique opportunity to influence
                  and expand your professional footprint. Connect with us and
                  start transforming lives through your teachings.
                </p>
                <button className={utils.btn2}>
                  <Link to={"/applicationform"} className={styles.applyLink}>
                    Apply for Program
                  </Link>
                </button>
              </div>
            </div>
            <div className={`${styles.imgSection} ${styles.benefitSection}`}>
              <img src={yogaLady2} alt="yoga_lady_2" />
            </div>
            <div
              className={`${teacherHomeStyles.benefitSection} ${teacherHomeStyles.stepsSection}`}
            >
              <div
                className={`${teacherHomeStyles.benefitSectionWrapper} ${teacherHomeStyles.questionWrapper}`}
              >
                <p className={`${utils.w700} ${utils.s32}`}>
                  Support Options for Prospective Teachers
                </p>
                <p
                  className={`${teacherHomeStyles.benefitSubheading2} ${utils.s18}`}
                >
                  If you're a yoga instructor interested in joining our platform
                  and have questions, we provide detailed support to assist you.
                  Feel free to contact us for more information on how to become
                  part of our community.
                </p>
                <button
                  className={utils.btn1}
                  onClick={() => toggleContactPopupState()}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherHome;

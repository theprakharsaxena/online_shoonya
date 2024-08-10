import React, { useState } from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import styles from "../styles/ProfilePage.module.css";
import ProductPageStyles from "../styles/ProductPage.module.css";
import programPageStyles from "../styles/ProgramPage.module.css";
import utils from "../styles/utils.module.css";
import profile_icon from "../assets/ProfilePage/profile_icon.svg";
import user_icon from "../assets/ProfilePage/user_icon.jpg";
import Footer from "../components/Footer";
import { usePopup } from "../context/PopupContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {
    toggleWelcomePopup,
    toggleAddProgramPopup,
    toggleEditApplicationFormPopup,
  } = usePopup();
  const { customerData } = useAuth();
  // console.log(customerData);
  const navigate = useNavigate();

  const currentPrograms = customerData?.current_programs || {};
  const { programme_id, activity, program_name, program_status } =
    currentPrograms;
  const previousPrograms = customerData?.previous_programs || [];

  const programNavigationHandler = () => {
    if (programme_id === 100) {
      // window.location.href = 'https://www.youtube.com/live/9iRcXb2bMxE'
      toggleWelcomePopup();
    } else {
      navigate("program/");
    }
  };

  return (
    <>
      <div className="py-24 2xl:py-28">
        <div className={landingPageStyles.hero}>
          <div className={`${utils.container} ${styles.profileContainer}`}>
            <div className={styles.profileMain}>
              <div className={styles.profileLeft}>
                <div className={styles.profileLeftTop}>
                  {/* <div className={styles.editIconDiv} onClick={() => toggleEditApplicationFormPopup()}>
                <img src={editIcon} alt="edit_icon" />
              </div> */}
                  <div className={styles.profileImgDiv}>
                    <img src={user_icon} alt="profile_img" />
                  </div>
                  <div className={styles.profileIcon_type}>
                    <div className={styles.profileIconDiv}>
                      <img src={profile_icon} alt="profile_icon" />
                      <p className={`${utils.s12} ${styles.profileType}`}>
                        Customer
                      </p>
                    </div>
                  </div>
                  <div className={styles.profileHeading}>
                    <p>Hello {customerData?.first_name}</p>
                  </div>
                  <div className={styles.profileSubheading}>
                    <p className={utils.s12}>
                      continue your journey and achieve Your Target
                    </p>
                  </div>
                </div>
                {/* <div className={`${styles.profileLeftTop} ${styles.profileLeftBottom}`}>
              <div className={styles.editIconDiv}>
                <div className={styles.clockIconTimerDiv}>
                  <img src={clockIcon} alt="edit_icon" />
                  <p className={utils.s12}>2 Day 12 hrs</p>
                </div>
              </div>
              <div className={`${styles.profileIcon_type} ${styles.sessionTimerDiv}`}>
                <div className={`${styles.profileIconDiv} ${styles.upcomingSession}`}>
                  <img src={redDot} alt="profile_icon" />
                  <p className={`${utils.s12} ${styles.profileType}`}>Upcoming Sesions</p>
                </div>
              </div>
              <div className={styles.profileHeading}>
                <p className={`${utils.s24} ${styles.leftBottomHeading}`}>Yogo prajan</p>
              </div>
              <div className={styles.calenderDiv}>
                <img src={calIcon} alt="calender_icon" />
                <p className={utils.s12}>Add Reminder to calender</p>
              </div>
            </div> */}
              </div>
              <div className={styles.profileRight}>
                <div
                  className={`${programPageStyles.links_session} ${styles.links_session}`}
                >
                  <div className={ProductPageStyles.links}>
                    <div className={ProductPageStyles.link_hr}>
                      <p
                        onClick={() => setTabIndex(0)}
                        className={
                          tabIndex === 0 && ProductPageStyles.activeLink
                        }
                      >
                        My Programs
                      </p>
                      {tabIndex === 0 && (
                        <span
                          className={`${ProductPageStyles.linkHrLink} ${styles.tabHr}`}
                        ></span>
                      )}
                    </div>
                    {/* <div className={ProductPageStyles.link_hr}>
                  <p onClick={() => setTabIndex(1)} className={tabIndex === 1 && ProductPageStyles.activeLink}>Coaching Bookings</p>
                  {tabIndex === 1 && <span className={`${ProductPageStyles.linkHrLink} ${styles.tabHr}`}></span>}
                </div> */}
                  </div>
                  {/* <div className={styles.wishlistIcon}>
                <img src={wishlistIcon} alt="wishlist_icon" />
              </div> */}
                </div>
                <div className={styles.programListDiv}>
                  <div className={styles.programListTitle}>
                    <p>Program Name</p>
                    <p className={styles.programStatusTitle}>Status</p>
                    <p className={styles.programActivityTitle}>Activity</p>
                  </div>
                  <div className={styles.programs}>
                    {/* <div className={styles.program} onClick={() => navigate(`program/`)}> */}
                    {program_name && (
                      <div
                        className={styles.program}
                        onClick={programNavigationHandler}
                      >
                        <p className={styles.programName}>{program_name}</p>
                        <p className={styles.programStatus}>{program_status}</p>
                        {programme_id === 100 ? (
                          <div className={`${styles.programTime}`}>
                            <p
                              className={`${utils.s12} ${styles.previousProgramActivity}`}
                            >
                              Join Now
                            </p>
                            {/* <p className={`${utils.s12}`}>{activity}</p> */}
                          </div>
                        ) : (
                          <div className={`${styles.programTime}`}>
                            <p className={`${utils.s12}`}>Next session on</p>
                            <p className={`${utils.s12}`}>{activity}</p>
                          </div>
                        )}
                      </div>
                    )}
                    <div className={styles.previousPrograms}>
                      {previousPrograms.map((program) => (
                        <div className={styles.program}>
                          <p className={styles.programName}>
                            {program.program_name}
                          </p>
                          <p className={styles.previousProgramStatus}>
                            {program.program_status}
                          </p>
                          <div className={`${styles.programTime}`}>
                            {/* <p className={`${utils.s12}`}>Next session</p> */}
                            <p
                              className={`${utils.s12} ${styles.previousProgramActivity}`}
                            >
                              {program.activity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className={`${programPageStyles.joinSessionDiv} ${programPageStyles.editSessionDiv} ${styles.walletIconDiv} ${styles.addIconDiv}`} onClick={() => toggleAddProgramPopup()}>
              <img src={addIcon} alt="wallet_icon" />
              <p className={`${programPageStyles.editSessionTxt} ${utils.s14}`}>Add Program</p>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

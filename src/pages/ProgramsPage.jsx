import React, { useState } from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import aboutPageStyles from "../styles/About.module.css";
import styles from "../styles/ProgramsPage.module.css";
import Dropdown from "../components/Dropdown";
import utils from "../styles/utils.module.css";
import leftArrow from "../assets/LandingPage/arrow_left_3.png";
import ProgramCards from "../components/ProgramCards";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ProgramsPage = () => {
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(null);
  const [issue, setIssue] = useState(null);
  const genderList = ["male", "female"];
  const locationList = [
    "Asia-Pacific",
    "Europe",
    "North America",
    "South America",
    "Oceania",
    "Africa",
  ];
  const timeList = [
    "06:00:00",
    "07:00:00",
    "08:00:00",
    "18:00:00",
    "20:00:00",
    "22:00:00",
  ];
  const issueList = [
    "issue 1",
    "issue 2",
    "issue 3",
    "issue 4",
    "issue 5",
    "issue 6",
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className="py-24 2xl:py-28 mx-10 sm:mx-12 md:mx-14 lg:mx-16">
        <div className={landingPageStyles.hero}>
          <div className={utils.wrapper}>
            <div className={styles.filterSection}>
              <div className={styles.filterSectionLeft}>
                <button
                  className={`${utils.btn1} ${styles.backBtn}`}
                  onClick={() => navigate(-1)}
                >
                  <img src={leftArrow} alt="left_arrow" />
                  <p>Back</p>
                </button>
              </div>
              <div className={styles.filters}>
                <button className={`${utils.btn2} ${styles.allBtn}`}>
                  All
                </button>
                <Dropdown
                  placeholder="Select the Problem"
                  list={issueList}
                  state={issue}
                  setState={setIssue}
                />
                <Dropdown
                  placeholder={"Location"}
                  list={locationList}
                  state={location}
                  setState={setLocation}
                />
                <Dropdown
                  placeholder={"Program Time"}
                  list={timeList}
                  state={time}
                  setState={setTime}
                />
                <Dropdown
                  placeholder={"Gender"}
                  list={genderList}
                  state={gender}
                  setState={setGender}
                />
              </div>
              <div className={styles.filterSectionRight}></div>
            </div>
            <div className={landingPageStyles.programsDiv}>
              <p className={landingPageStyles.tagLine}>
                Investing in Yourself Starts Here
              </p>
              <div className={landingPageStyles.heading_btn}>
                <p className={`${utils.s48} ${utils.sw500}`}>Our Programs</p>
                {/* <button className={`${utils.btn1}`} onClick={() => navigate('/market')} >
              <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
            </button> */}
              </div>
              <p className={`${landingPageStyles.shortSubheading}`}>
                {" "}
                Reap the maximum benefits possible from your Yoga practice.
              </p>
            </div>
          </div>
          <ProgramCards padding={true} />
          {/* <ProgramCards /> */}
          {/* <ProgramCards /> */}
          <div className={utils.wrapper}>
            <div className={`${landingPageStyles.programsDiv}`}>
              <div className={landingPageStyles.heading_btn}>
                <p className={`${utils.s48} ${utils.sw500}`}>Our Programs</p>
                {/* <button className={`${utils.btn1} ${landingPageStyles.programsViewBtn}`}>
              <p>View all</p> <FaArrowRightLong />
            </button> */}
              </div>
              <p
                className={`${landingPageStyles.shortSubheading} ${landingPageStyles.shortSubheadingExtra} ${aboutPageStyles.teamSubheading}`}
              >
                The professional world is demanding. Constant pressure,
              </p>
            </div>
          </div>
          <ProgramCards padding={true} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramsPage;

import React, { useEffect, useState } from 'react'
import landingPageStyles from '../styles/LandingPage.module.css';
import leftArrow from '../assets/LandingPage/round_arrow.png';
import ProductPageStyles from '../styles/ProductPage.module.css'
import ProfileImg from '../assets/Footer/brand_only_logo.jpeg';
import ProductCardStyles from '../styles/ProductCard.module.css';
import utils from '../styles/utils.module.css';
import productStar from '../assets/MarketPage/product_star.png'
import wishlistIcon from '../assets/ProductPage/wishlist_icon.svg';
import YogaLady from '../assets/LandingPage/yoga_lady_2.jpg';
import SessionIcon from '../assets/ProductPage/session_icon.svg'
import SectionIcon from '../assets/ProductPage/section_icon.svg'
import LectureIcon from '../assets/ProductPage/lecture_icon.svg'
import VideoIcon from '../assets/ProductPage/video_icon.svg'
import AudioIcon from '../assets/ProductPage/audio_icon.svg'
import liveSessionDot from '../assets/TeacherHomePage/white_dot.svg';
import editIcon from '../assets/TeacherHomePage/edit_icon.svg';
import Footer from '../components/Footer';
import { usePopup } from '../context/PopupContext';
import Dropdown4 from '../components/Dropdown4';
import styles from '../styles/ProgramPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { SERVER_URI } from '../main';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import toast from 'react-hot-toast';
import Meeting from '../components/Meeting';
import ProgramModuleDropdown from '../components/ProgramModuleDropdown';

const ProgramPage = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { sessionNotStarted, toggleSessionNotStarted, } = usePopup();
  const dateList = ['30 Jan 2024', '30 Jan 2024', '30 Jan 2024'];
  const [date, setDate] = useState(null);
  // const [authToken, setAuthToken] = useState('');
  const [programData, setProgramData] = useState({});
  const { customerData, customerId } = useAuth();
  const current_programs = customerData?.current_programs;
  const programme_id = current_programs?.programme_id;
  const navigate = useNavigate();
  const [meeting, initMeeting] = useDyteClient();
  const [authToken, setAuthToken] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const aarambh_programme_id = 72;
  const aarambh_yt_link = 'https://www.youtube.com'
  const token = localStorage.getItem('token');

  const fetchCurrentProgramData = async () => {
    if (customerId && programme_id) {
      try {
        const response = await axios.post(`${SERVER_URI}/api/customer/programme_data`, {
          customer_id: customerId, programme_id
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = (response?.data || response?.response?.data)

        // Axios does not use response.ok, so check for the status directly
        if (data.status === false) {
          toast.error(data.message)
        }

        setProgramData(data?.data);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        }
      }
    }
  };

  const joinSessionHandler = async () => {
    // return setIsJoining(true);
    // if (programme_id === aarambh_programme_id) {
    //   window.location.href = aarambh_yt_link;
    //   return;
    // }

    if (customerId && programme_id) {
      try {
        const response = await axios.post(`${SERVER_URI}/api/customer/join_session`, {
          customer_id: customerId, programme_id,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = (response?.data || response?.response?.data)
        console.log(data);

        // Axios does not use response.ok, so check for the status directly
        if (data.status === false) {
          if (data.message === 'The Session has not yet started.') {
            console.log('working fine');
            toggleSessionNotStarted();
          } else {
            toast.error(data.message)
          }
          return;
        }

        setAuthToken(data?.auth_token);
        setIsJoining(true);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        }
      }
    }
  }

  useEffect(() => {
    console.log(sessionNotStarted);
  }, [sessionNotStarted]);

  const parseTime = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return { hours, minutes, seconds };
  };

  const calculateTimeLeft = () => {
    const now = new Date();

    if (!programData || !programData.program_time) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const { hours, minutes, seconds } = parseTime(programData.program_time);

    const targetTime = new Date();
    targetTime.setHours(hours, minutes, seconds, 0);

    if (targetTime < now) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    const difference = targetTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [programData]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);


  const getSessionDates = (sessions) => {
    return sessions.map(session => session.session_date);
  };

  useEffect(() => {
    fetchCurrentProgramData();
  }, [customerId, programme_id]);

  useEffect(() => {
    console.log(programData);
  }, [programData]);

  useEffect(() => {
    if (authToken) {
      initMeeting({
        authToken: authToken,
        defaults: {
          audio: false,
          video: false,
        },
      });
    }
  }, [authToken]);

  useEffect(() => {
    if (!meeting) {
      return;
    }

    const meetJoinListener = async () => {
      try {
        const response = await axios.post(`${SERVER_URI}/api/customer/join_session`, {
          customer_id: customerId, programme_id,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // const data = (response?.data || response?.response?.data)

        // Axios does not use response.ok, so check for the status directly
        if (data.status === false) {
          console.log(data.status);
          toast.error(data.message)
          return;
        }
        console.log(data);
        setIsJoining(true);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        }
      }
    }

    const meetLeaveListener = async () => {
      try {
        console.log('leaved');
        const response = await axios.post(`${SERVER_URI}/api/customer/leave_session`, {
          customer_id: customerId, programme_id,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = (response?.data || response?.response?.data)

        // Axios does not use response.ok, so check for the status directly
        if (data.status === false) {
          toast.error(data.message)
        }
        setIsJoining(false);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        }
      }
    }
    meeting.self.on("roomJoined", meetJoinListener);
    meeting.self.on("roomLeft", meetLeaveListener);
  }, [meeting]);

  return (
    <div className={landingPageStyles.hero}>
      {/* <div className={landingPageStyles.heroWrapper}> */}
      <div className={ProductPageStyles.productMain}>
        <div className={ProductPageStyles.productHeader}>
          <div className={ProductPageStyles.productHeaderTop}>
            <div className={ProductPageStyles.productHeaderNavigation}>
              <img src={leftArrow} className={styles.leftArrow} alt="left_arrow" onClick={() => navigate(-1)} />
              <p className={`${styles.productTitle} ${utils.s32}`}>{programData?.name}</p>
            </div>
            {/* <div className={`${ProductPageStyles.productHeaderTopWrapper}`}>
              <div className={ProductPageStyles.productHeaderTopLeft}>
                <p>Total Enrolled 50 Students</p>
                <div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className={`${ProductPageStyles.productMain} ${ProductPageStyles.productMainExtra}`}>
        <div className={`${ProductPageStyles.productContentInfoWrapper} ${styles.productContentInfoWrapperExtra}`}>
          <div className={ProductPageStyles.productContentInfo}>
            <div className={`${ProductCardStyles.productPrice} ${ProductPageStyles.productPriceExtra}`}>
              <div className={ProductPageStyles.pricing}>
                <p className={`${utils.s24} ${styles.programsHeading}`}>Program Timeline</p>
              </div>
              <div className={styles.modules}>
                {programData?.modules?.map(module => {
                  const sessionDates = getSessionDates(module.sessions);
                  return (
                    <React.Fragment key={module.id}>
                      <ProgramModuleDropdown placeholder={module.name} list={sessionDates} /></React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={ProductPageStyles.productImgDiv}>
          {!isJoining ? <>
            <img src={YogaLady} alt="session_img" />
            <div className={`${ProductPageStyles.liveSessionsDiv} ${styles.instructorDiv}`}>
              <div className={ProductPageStyles.productRatingDiv}>
                <div className={`${ProductPageStyles.productOwnerProfile} ${styles.instructorProfile}`}>
                  <img src={ProfileImg} alt="product_owner" />
                  <p className={`${styles.instructorName} ${utils.s12}`}>Param Yoga</p>
                </div>
              </div>
            </div>
          </> :
            <DyteProvider value={meeting} fallback={<i>Loading...</i>}>
              <Meeting />
            </DyteProvider>}
        </div>
      </div>
      <div className={`${ProductPageStyles.productMain} `}>
        <div className={styles.sessionInfoWrapper}>
          <div className={`${ProductPageStyles.linksSection} ${styles.linksSection}`}>
            <div className={styles.links_session}>
              <div className={ProductPageStyles.links}>
                <div className={ProductPageStyles.link_hr}>
                  <p onClick={() => setTabIndex(0)} className={tabIndex === 0 && ProductPageStyles.activeLink}>About Programs</p>
                  {tabIndex === 0 && <span className={ProductPageStyles.linkHrLink}></span>}
                </div>
                <div className={ProductPageStyles.link_hr}>
                  <p onClick={() => setTabIndex(1)} className={tabIndex === 1 && ProductPageStyles.activeLink}>Community</p>
                  {tabIndex === 1 && <span className={ProductPageStyles.linkHrLink}></span>}
                </div>
              </div>
              <div className={styles.sessionDiv}>
                {/* <div className={styles.liveSession}>
                  <div className={`${styles.joinSessionDiv} ${styles.editSessionDiv}`}>
                    <img src={editIcon} alt="edit_icon" />
                    <p className={styles.editSessionTxt}>Edit</p>
                  </div>
                  <div className={styles.joinSessionDiv}>
                    <p>Publish</p>
                  </div>
                </div> */}
                <div className={styles.liveSession}>
                  {/* <p className={styles.liveSessionTxt}>Session will live</p> */}
                  {timeLeft ? <div className={styles.joinSessionDiv} onClick={joinSessionHandler}>
                    <img src={liveSessionDot} alt="live_session_dot" />
                    <p>Join Session</p>
                  </div> :
                    <p>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</p>
                  }
                </div>
              </div>
            </div>
            {tabIndex === 0 && <div className={ProductPageStyles.courseSection}>
              <div className={ProductPageStyles.courseBenefits}><p className={ProductPageStyles.courseBenefitTitle}>Course Description</p>
                <p className={ProductPageStyles.courseBenefitsDesc}>{programData.description}</p></div>
            </div>}
            {tabIndex === 2 && <div className={ProductPageStyles.reviewSection}>
              <div className={ProductPageStyles.reviewItem}>
                <img src={ProfileImg} alt="profile_img" />
                <div className={ProductPageStyles.reviewInfo}><p className={ProductPageStyles.reviewPerson}>Leonardo Da Vinci</p><p className={ProductPageStyles.reviewDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus illo accusantium, officia sapiente recusandae numquam qui mollitia rerum quasi eveniet temporibus, deserunt quo suscipit praesentium est nulla fugit atque.</p></div>
              </div>
              <div className={ProductPageStyles.reviewItem}>
                <img src={ProfileImg} alt="profile_img" />
                <div className={ProductPageStyles.reviewInfo}><p className={ProductPageStyles.reviewPerson}>Leonardo Da Vinci</p><p className={ProductPageStyles.reviewDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus illo accusantium, officia sapiente recusandae numquam qui mollitia rerum quasi eveniet temporibus, deserunt quo suscipit praesentium est nulla fugit atque.</p></div>
              </div>
              <div className={ProductPageStyles.reviewItem}>
                <img src={ProfileImg} alt="profile_img" />
                <div className={ProductPageStyles.reviewInfo}><p className={ProductPageStyles.reviewPerson}>Leonardo Da Vinci</p><p className={ProductPageStyles.reviewDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus illo accusantium, officia sapiente recusandae numquam qui mollitia rerum quasi eveniet temporibus, deserunt quo suscipit praesentium est nulla fugit atque.</p></div>
              </div>
              <div className={ProductPageStyles.reviewBtnDiv}>
                <button className={`${utils.btn1} ${ProductPageStyles.reviewBtn}`}>Load more reviews</button>
              </div>
            </div>}
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProgramPage
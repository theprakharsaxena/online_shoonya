import React, { useState } from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import leftArrow from "../assets/LandingPage/round_arrow.png";
import styles from "../styles/ProductPage.module.css";
import ProfileImg from "../assets/Footer/brand_only_logo.jpeg";
import ProductCardStyles from "../styles/ProductCard.module.css";
import utils from "../styles/utils.module.css";
import wishlistIcon from "../assets/ProductPage/wishlist_icon.svg";
import SessionIcon from "../assets/ProductPage/session_icon.svg";
import SectionIcon from "../assets/ProductPage/section_icon.svg";
import LectureIcon from "../assets/ProductPage/lecture_icon.svg";
import AudioIcon from "../assets/ProductPage/audio_icon.svg";
import Footer from "../components/Footer";
import { usePopup } from "../context/PopupContext";
import { useNavigate, useParams } from "react-router-dom";
import ProgramsList from "../utils/ProgramsList";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { SERVER_URI } from "../main";
import toast from "react-hot-toast";
import { CiStar } from "react-icons/ci";

const ProductPage = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const {
    togglePopup,
    toggleLoginPopup,
    toggleWelcomePopup,
    toggleBuyPopup,
    currentProgramName,
    setCurrentProgramName,
  } = usePopup();
  const { id } = useParams();
  console.log(id);
  const { isAuthenticated } = useAuth();

  const { image, original_price: original_price1 } = ProgramsList.find(
    (p) => p.id === parseInt(id)
  );
  const { programsList } = useAuth();
  console.log(programsList.length);
  const program =
    programsList.length > 0
      ? programsList.find((p) => p.id === parseInt(id))
      : null;
  const {
    name,
    description,
    benefits,
    price,
    original_price,
    sections,
    lectures,
  } = program || {};
  console.log(program);

  const navigate = useNavigate();
  const { customerId } = useAuth();

  const startPayment = async () => {
    if (!isAuthenticated) {
      toggleLoginPopup();
      return;
    }
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${SERVER_URI}/api/customer/start_payment`,
        {
          customer_id: customerId,
          programme_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );

      const data = response?.data || response?.response?.data; // Axios automatically parses JSON
      console.log(data);

      if (data.status === false) {
        toast.error(data.message);
        return;
      }

      console.log(data?.payment_link === "aarambh_registration");
      if (data?.payment_link === "aarambh_registration") {
        console.log("working");
        navigate("/profile");
        return;
      }
      window.location.href = data.payment_link;
    } catch (e) {
      if (e.response.data.message) {
        toast.error(e.response.data.message);
      }
      console.log(e);
    }
  };

  // const buyPopupHandler = () => {
  //   setCurrentProgramName(title)
  //   toggleBuyPopup();
  // }

  return (
    <div className={landingPageStyles.hero}>
      <div className={utils.wrapper}>
        <div className={styles.productMain}>
          <div className={styles.productHeader}>
            <div className={styles.productHeaderTop}>
              <div className={styles.productHeaderNavigation}>
                <img
                  src={leftArrow}
                  alt="left_arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(-1)}
                />
                <p>Shoonya Life Featured / {name}</p>
              </div>
              <div className={styles.productHeaderTopWrapper}>
                <div className={styles.productHeaderTopLeft}>
                  <p className={`${utils.s32} ${utils.w700}`}>{name}</p>
                  <div>
                    <div className={styles.productRatingDiv}>
                      <div className={styles.productOwnerProfile}>
                        <img src={ProfileImg} alt="product_owner" />
                        <p className={ProductCardStyles.productSellerName}>
                          Param Yoga
                        </p>
                      </div>
                      <div className={styles.productRatingInfo}>
                        {/* <img src={productStar} alt="product_rating" /> */}
                        <CiStar className={styles.star_icon} />
                        <p>0.0</p>
                        <p
                          className={`${ProductCardStyles.ratings} ${styles.ratingNo}`}
                        >
                          (0 ratings)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productHeaderTopRight}>
                  <button
                    className={`${utils.btn1} ${styles.wishlistBtn}`}
                    onClick={() => togglePopup()}
                  >
                    {" "}
                    <img src={wishlistIcon} alt="wishlist_icon" />
                    <p className={`${styles.wishlistTxt} ${utils.s20}`}>
                      Wishlist
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.productMain} ${styles.productMainExtra}`}>
          <div className={styles.productImgDiv}>
            <img src={image} alt="session_img" />
            <div className={styles.liveSessionsDiv}>
              <img src={SessionIcon} alt="session_icon" />
              <p>{lectures} live sessions</p>
            </div>
          </div>
          <div className={styles.productContentInfoWrapper}>
            <div className={styles.productContentInfo}>
              <div
                className={`${ProductCardStyles.productPrice} ${styles.productPriceExtra}`}
              >
                <div className={styles.pricing}>
                  <p
                    className={`${ProductCardStyles.newPrice} ${styles.newPriceExtra}`}
                  >
                    €{price}
                  </p>
                  <p className={`${ProductCardStyles.originalPrice}`}>
                    {original_price1}
                  </p>
                </div>
                {/* <div className={styles.discountDiv}>
                  <p>20% OFF</p>
                </div> */}
                <button
                  className={`${utils.btn1} ${styles.buyBtn}`}
                  onClick={startPayment}
                >
                  <p>Enroll Now</p>
                </button>
                {/* <button className={`${utils.btn1} ${styles.buyBtn}`} onClick={(startPayment)}><p>Buy</p></button> */}
              </div>
              <div className={styles.productContentInfoList}>
                <div className={styles.productContentInfoItem}>
                  <img src={SectionIcon} alt="session_icon" />
                  <p>{sections} Section</p>
                </div>
                <div className={styles.productContentInfoItem}>
                  <img src={LectureIcon} alt="lecture_icon" />
                  <p>{lectures} Lectures</p>
                </div>
                {/* <div className={styles.productContentInfoItem}><img src={VideoIcon} alt="video_icon" /><p>Sun, Mon, Tues, fri</p></div> */}
                <div className={styles.productContentInfoItem}>
                  <img src={AudioIcon} alt="audio_icon" />
                  <p>English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.productMain} `}>
          <div className={styles.reviewInfoSection}>
            <div className={styles.linksSection}>
              <div className={styles.links}>
                <div className={styles.link_hr}>
                  <p
                    onClick={() => setTabIndex(0)}
                    className={tabIndex === 0 && styles.activeLink}
                  >
                    Description
                  </p>
                  {tabIndex === 0 && (
                    <span className={styles.linkHrLink}></span>
                  )}
                </div>
                <div className={styles.link_hr}>
                  <p
                    onClick={() => setTabIndex(1)}
                    className={tabIndex === 1 && styles.activeLink}
                  >
                    Benefits
                  </p>
                  {tabIndex === 1 && (
                    <span className={styles.linkHrLink}></span>
                  )}
                </div>
                <div className={styles.link_hr}>
                  <p
                    onClick={() => setTabIndex(2)}
                    className={tabIndex === 2 && styles.activeLink}
                  >
                    Review
                  </p>
                  {tabIndex === 2 && (
                    <span className={styles.linkHrLink}></span>
                  )}
                </div>
              </div>
              {tabIndex === 0 && (
                <div className={styles.courseSection}>
                  <div className={styles.courseBenefits}>
                    <p className={styles.courseBenefitsDesc}>{description}</p>
                  </div>
                </div>
              )}
              {tabIndex === 1 && (
                <div className={styles.courseSection}>
                  {benefits?.map((benefit) => (
                    <div className={styles.courseBenefits}>
                      <p className={styles.courseBenefitTitle}>
                        {benefit.mainHeading}
                      </p>
                      <p className={styles.courseBenefitsDesc}>
                        {benefit.subHeading}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {tabIndex === 2 && (
                <div className={styles.reviewSection}>
                  {/* <div className={styles.reviewItem}>
                  <img src={ProfileImg} alt="profile_img" />
                  <div className={styles.reviewInfo}><p className={styles.reviewPerson}>Leonardo Da Vinci</p><p className={styles.reviewDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus illo accusantium, officia sapiente recusandae numquam qui mollitia rerum quasi eveniet temporibus, deserunt quo suscipit praesentium est nulla fugit atque.</p></div>
                </div>
                <div className={styles.reviewItem}>
                  <img src={ProfileImg} alt="profile_img" />
                  <div className={styles.reviewInfo}><p className={styles.reviewPerson}>Leonardo Da Vinci</p><p className={styles.reviewDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus illo accusantium, officia sapiente recusandae numquam qui mollitia rerum quasi eveniet temporibus, deserunt quo suscipit praesentium est nulla fugit atque.</p></div>
                </div>
                <div className={styles.reviewItem}>
                  <img src={ProfileImg} alt="profile_img" />
                  <div className={styles.reviewInfo}><p className={styles.reviewPerson}>Leonardo Da Vinci</p><p className={styles.reviewDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus illo accusantium, officia sapiente recusandae numquam qui mollitia rerum quasi eveniet temporibus, deserunt quo suscipit praesentium est nulla fugit atque.</p></div>
                </div>
                <div className={styles.reviewBtnDiv}>
                  <button className={`${utils.btn1} ${styles.reviewBtn}`}>Load more reviews</button>
                </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

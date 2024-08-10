import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";

import { usePopup } from "../context/PopupContext";
import { useAuth } from "../context/AuthContext";
import ProgramsList from "../utils/ProgramsList";
import { SERVER_URI } from "../main";

import leftArrow from "../assets/LandingPage/round_arrow.png";
import ProfileImg from "../assets/Footer/brand_only_logo.jpeg";
import wishlistIcon from "../assets/ProductPage/wishlist_icon.svg";
import SessionIcon from "../assets/ProductPage/session_icon.svg";
import SectionIcon from "../assets/ProductPage/section_icon.svg";
import LectureIcon from "../assets/ProductPage/lecture_icon.svg";
import AudioIcon from "../assets/ProductPage/audio_icon.svg";

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
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { customerId, programsList } = useAuth();

  const { image, original_price: original_price1 } = ProgramsList.find(
    (p) => p.id === parseInt(id)
  );
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
    start_date,
    batch = 1,
  } = program || {};

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
      if (data.status === false) {
        toast.error(data.message);
        return;
      }

      if (data?.payment_link === "aarambh_registration") {
        navigate("/profile");
        return;
      }
      window.location.href = data.payment_link;
    } catch (e) {
      if (e.response.data.message) {
        toast.error(e.response.data.message);
      }
    }
  };

  // const buyPopupHandler = () => {
  //   setCurrentProgramName(title)
  //   toggleBuyPopup();
  // }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mx-10 sm:mx-12 md:mx-14 lg:mx-16 py-24 2xl:py-28">
        <div className="flex items-center mb-4">
          <img
            src={leftArrow}
            alt="left_arrow"
            className="cursor-pointer h-6 w-6"
            onClick={() => navigate(-1)}
          />
          <p className="ml-4 text-[var(--text-blue)]">
            Shoonya Life Featured / {name}
          </p>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col justify-start">
            <p className="text-2xl font-bold text-[var(--gray)]">{name}</p>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
              <div className="flex items-center space-x-2">
                <img
                  src={ProfileImg}
                  alt="product_owner"
                  className="w-10 h-10 rounded-full"
                />
                <p className="ml-2 text-red-600 text-lg">Param Yoga</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <CiStar className="text-[var(--text-blue)] text-lg" />
                  <p className="text-[var(--text-blue)]">0.0</p>
                </div>
                <p className="text-[var(--light-gray)]">(0 ratings)</p>
              </div>
            </div>
          </div>
          <button
            className="flex space-x-2 h-fit items-center px-4 py-2 border border-[var(--gray)] rounded-lg bg-white shadow-md hover:bg-gray-100"
            onClick={() => togglePopup()}
          >
            <img src={wishlistIcon} alt="wishlist_icon" className="w-6 h-6" />
            <p className="font-bold text-[var(--gray)]">Wishlist</p>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden h-[100%] rounded-xl">
              <img
                src={image}
                alt="session_img"
                className="w-full h-auto object-cover rounded-xl shadow-xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-white pb-3 px-3 pt-20">
                <p className="text-sm font-medium">Start Date:</p>
                <p className="text-base">
                  {new Date(start_date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center space-x-2 absolute bottom-5 right-5 bg-white p-2 rounded-lg">
                <img src={SessionIcon} alt="session_icon" className="w-6 h-6" />
                <p className="text-gray-700">{lectures} live sessions</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between shadow-xl p-5 rounded-xl min-h-[350px]">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <p className="text-3xl font-bold text-[var(--text-blue)]">
                  €{price}
                </p>
                <p className="text-xl text-[var(--light-gray)] line-through">
                  {original_price1}
                </p>
              </div>
              {/* <div className={styles.discountDiv}>
                  <p>20% OFF</p>
                </div> */}
              <button
                className="flex w-full rounded-xl shadow-md border border-[var(--bg-brown)] justify-center py-3 bg-[var(--bg-brown)] hover:bg-white text-white hover:text-[var(--bg-brown)]"
                onClick={startPayment}
              >
                <p>Enroll Now</p>
              </button>
              <div className="flex items-center space-x-2 bg-gray-500/10 px-2 rounded-lg w-fit">
                <p className="text-gray-700 text-sm font-medium">Batch No:</p>
                <p className="text-gray-900 text-base">{batch}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <img src={SectionIcon} alt="session_icon" className="w-6 h-6" />
                <p className="text-gray-700 text-lg">{sections} Section</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={LectureIcon} alt="lecture_icon" className="w-6 h-6" />
                <p className="text-gray-700 text-lg">{lectures} Lectures</p>
              </div>
              {/* <div className={styles.productContentInfoItem}><img src={VideoIcon} alt="video_icon" /><p>Sun, Mon, Tues, fri</p></div> */}

              <div className="flex items-center space-x-2">
                <img src={AudioIcon} alt="audio_icon" className="w-6 h-6" />
                <p className="text-gray-700 text-lg">English</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <div className="flex mb-4">
            <button
              className={`px-4 py-2 font-medium ${
                tabIndex === 0
                  ? "text-[var(--text-blue)] border-b-2 border-[var(--text-blue)]"
                  : "text-[var(--light-gray)]"
              }`}
              onClick={() => setTabIndex(0)}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                tabIndex === 1
                  ? "text-[var(--text-blue)] border-b-2 border-[var(--text-blue)]"
                  : "text-[var(--light-gray)]"
              }`}
              onClick={() => setTabIndex(1)}
            >
              Benefits
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                tabIndex === 2
                  ? "text-[var(--text-blue)] border-b-2 border-[var(--text-blue)]"
                  : "text-[var(--light-gray)]"
              }`}
              onClick={() => setTabIndex(2)}
            >
              Review
            </button>
          </div>
          {tabIndex === 0 && (
            <div className="text-gray-700 mb-4">
              <p>{description}</p>
            </div>
          )}
          {tabIndex === 1 && (
            <div className="text-gray-700 mb-4">
              {benefits?.map((benefit) => (
                <div key={benefit.mainHeading} className="mb-4">
                  <p className="text-lg font-semibold">{benefit.mainHeading}</p>
                  <p>{benefit.subHeading}</p>
                </div>
              ))}
            </div>
          )}
          {tabIndex === 2 && (
            <div>
              {/* 
              <div className={styles.reviewSection}>
                 <div className={styles.reviewItem}>
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
                </div> 
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

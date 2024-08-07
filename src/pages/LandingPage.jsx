import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutShoonya from "../components/AboutShoonya";
import Footer from "../components/Footer";
import { usePopup } from "../context/PopupContext";
import { SERVER_URI } from "../main";
import Retreats from "../components/LandingPage/Retreats";
import ExploreProgram from "../components/LandingPage/ExploreProgram";
import OurProgram from "../components/LandingPage/OurProgram";
import ExploreResources from "../components/LandingPage/ExploreResources";
import Rebalance from "../components/LandingPage/Rebalance";
import MainSection from "../components/LandingPage/MainSection";

const LandingPage = () => {
  const { togglePopup, toggleWelcomePopup } = usePopup();
  const [isRespo, setIsRespo] = useState(window.innerWidth <= 1024);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsRespo(window.innerWidth <= 1024);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${SERVER_URI}/send_data`);
      setData(await res.text());
      // console.log(await res.text());
    };
    // getData();
  }, []);

  return (
    <div className="">
      <div className="relative w-full">
        <div className="flex flex-col w-full">
          <MainSection />
          <Rebalance />
          <ExploreProgram />
          <Retreats />
          <OurProgram shortened={true} />
          {/* <div className={styles.surveySection}>
                    <div className={styles.surveyDiv}>
                        <p className={utils.s24}>Don't Know what programs are best for you ?</p>
                        <p className={`${utils.s32} ${utils.sw500}`}>Take a short survey and let us find the best program that suits you</p>
                        <button className={`${utils.btn1} ${styles.surveyBtn2}`} onClick={() => togglePopup()}><p>Take a Survey</p><img src={rightArrow2} alt="arrow_right" /></button>
                    </div>
                </div> */}
          {/* <TextSlider /> */}
          <AboutShoonya />
          {/* <TextSlider /> */}
          <ExploreResources shortened={true} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

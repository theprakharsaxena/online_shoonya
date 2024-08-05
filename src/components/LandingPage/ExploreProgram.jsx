import LeftSlider from "../../components/LeftSlider";
import RightSlider from "../../components/RightSlider";
import Slider from "../../components/Slider";
import Star1 from "../../assets/LandingPage/star_landing.png";
import Star2 from "../../assets/LandingPage/star_two.png";
import { Link, useNavigate } from "react-router-dom";
import rightArrow from "../../assets/LandingPage/right_arrow_landing_page_section.png";
import { useEffect, useState } from "react";

const ExploreProgram = () => {
  const [isRespo, setIsRespo] = useState(window.innerWidth <= 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsRespo(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white w-full flex justify-center fade-in-image">
      {/* <div className={styles.sectionDiv}>
          <div className={styles.sectionDivWrapper}>
            {isRespo && <LeftSlider />}
            <div className={styles.leftSectionDiv}>
              <div className={styles.headingSectionDiv}>
                <p className={`${styles.para} ${styles.tagLine}`}>
                  {" "}
                  Touch the Stillness Within
                </p>
                <p
                  className={`${styles.headingExtra} ${styles.para} ${utils.s48}`}
                >
                  Embrace Mindfulness and Serenity with True Yoga
                </p>
                <p
                  className={`${styles.shortSubheading} ${styles.shortSubheadingExtra} ${styles.para}`}
                >
                  Shoonya Life offers unique and comprehensive wellbeing
                  programs designed to address the specific needs of corporate
                  professionals. Our program incorporates ancient wisdom with
                  modern practices to help you achieve inner balance, clarity,
                  and sustainable well-being. Within each of us lies a source of
                  pure calmness and blissfulness. Nurturing it helps improve
                  cognitive functions and clarity of thoughts & actions,
                  ultimately leading to professional excellence.
                </p>
              </div>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <img src={Star1} alt="" />
                  <p className={`${styles.featuresHeading} ${utils.s24}`}>
                    Expert Team
                  </p>
                  <p>
                    Shoonya Life leverages its professional expertise and the
                    accredited training of Param Yoga to create tailored
                    programs for corporate professionals.{" "}
                  </p>
                </div>
                <div className={styles.feature}>
                  <img src={Star2} alt="" />
                  <p className={`${styles.featuresHeading} ${utils.s24}`}>
                    Daily Yoga
                  </p>
                  <p>
                    Daily yoga practice unlocks mental and spiritual clarity.
                    Its restorative power strengthens and energizes your body,
                    creating a foundation for well-being.{" "}
                  </p>
                </div>
              </div>
              <div className={styles.btnLinkDiv}>
                <button
                  className={`${utils.btn1} ${styles.surveyBtn}`}
                  onClick={() => navigate("/marketplace")}
                >
                  Explore Programs
                </button>
                <Link to="/about" className={styles.link}>
                  About Us <img src={rightArrow} />
                </Link>
              </div>
            </div>
            {!isRespo && <Slider />}
            {isRespo && <RightSlider />}
          </div>
        </div> */}
      <div className="flex lg:max-w-[100rem] w-full">
        {isRespo && <LeftSlider />}
        <div className="flex flex-col px-16 py-4 gap-[30px] lg:w-[60%] self-center xl:max-h-[900px] justify-center">
          <div className="flex flex-col gap-3 text-[var(--text-blue)]">
            <p className="font-satoshi font-medium">
              {" "}
              Touch the Stillness Within
            </p>
            <p
              className={`w-full lg:text-5xl sm:text-4xl text-3xl font-sentinent font-medium text-[var(--text-blue)]`}
            >
              Embrace Mindfulness and Serenity with True Yoga
            </p>
            <p className="">
              Shoonya Life offers unique and comprehensive wellbeing programs
              designed to address the specific needs of corporate professionals.
              Our program incorporates ancient wisdom with modern practices to
              help you achieve inner balance, clarity, and sustainable
              well-being. Within each of us lies a source of pure calmness and
              blissfulness. Nurturing it helps improve cognitive functions and
              clarity of thoughts & actions, ultimately leading to professional
              excellence.
            </p>
          </div>
          <div className="mt-6 flex py-0 px-5 justify-between">
            <div className="flex flex-col gap-4 w-[45%]">
              <img src={Star1} alt="" className="w-10" />
              <p className="text-xl font-satoshi font-medium">Expert Team</p>
              <p>
                Shoonya Life leverages its professional expertise and the
                accredited training of Param Yoga to create tailored programs
                for corporate professionals.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 w-[45%]">
              <img src={Star2} alt="" className="w-10" />
              <p className="text-xl font-satoshi font-medium">Daily Yoga</p>
              <p>
                Daily yoga practice unlocks mental and spiritual clarity. Its
                restorative power strengthens and energizes your body, creating
                a foundation for well-being.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
              className="text-[var(--text-blue)] rounded-[58px] py-3 px-6 flex space-x-2 items-center border border-[var(--text-blue)] hover:animate-fade-right font-satoshi"
              onClick={() => navigate("/marketplace")}
            >
              Explore Programs
            </button>
            <Link
              to="/about"
              className="relative after:content-[''] after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
            >
              <div className="flex font-satoshi items-center">
                <p>About Us</p>
                <img src={rightArrow} />
              </div>
            </Link>
          </div>
        </div>
        {!isRespo && <Slider />}
        {isRespo && <RightSlider />}
      </div>
    </div>
  );
};

export default ExploreProgram;

import LeftSlider from "../../components/LeftSlider";
import RightSlider from "../../components/RightSlider";
import Slider from "../../components/Slider";
import Star1 from "../../assets/LandingPage/star_landing.png";
import Star2 from "../../assets/LandingPage/star_two.png";
import { Link, useNavigate } from "react-router-dom";
import rightArrow from "../../assets/LandingPage/right_arrow_landing_page_section.png";
import useInView from "../../utils/useInView";

const ExploreProgram = () => {
  // const [isRespo, setIsRespo] = useState(window.innerWidth <= 1024);
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  // useEffect(() => {
  // const handleResize = () => {
  //   setIsRespo(window.innerWidth <= 1024);
  // };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="my-20">
      <div className="lg:hidden flex">
        <LeftSlider />
      </div>
      <section className="px-10 sm:px-12 md:px-14 lg:px-16 my-5 lg:my-0">
        <div className="bg-white w-full flex justify-center fade-in-image">
          <div className="flex w-full">
            <div className="flex flex-col py-4 gap-[30px] self-center justify-center">
              <div className="flex flex-col space-y-3">
                <div
                  className={`flex flex-col space-y-3 ${
                    inView ? "animate-fade-up" : ""
                  }`}
                  ref={ref}
                >
                  <p className="font-satoshi font-medium text-[var(--text-blue)]">
                    Touch the Stillness Within
                  </p>
                  <p
                    className={`w-full lg:text-5xl sm:text-4xl text-3xl font-sentinent font-medium text-[var(--text-blue)]`}
                  >
                    Embrace Mindfulness and Serenity with True Yoga
                  </p>
                </div>
                <p className="text-[var(--text-blue)]">
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
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4 w-[80%] sm:w-full lg:w-[80%]">
                  <div className={`flex space-x-3 items-center`}>
                    <img src={Star1} alt="" className="w-10" />
                    <p className={`text-xl font-satoshi font-semibold`}>
                      Expert Team
                    </p>
                  </div>
                  <p className="">
                    Shoonya Life leverages its professional expertise and the
                    accredited training of Param Yoga to create tailored
                    programs for corporate professionals.{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-4 w-[80%] sm:w-full lg:w-[80%]">
                  <div className={`flex space-x-3 items-center `}>
                    <img src={Star2} alt="" className="w-10" />
                    <p className={`text-xl font-satoshi font-semibold`}>
                      Daily Yoga
                    </p>
                  </div>
                  <p className="">
                    Daily yoga practice unlocks mental and spiritual clarity.
                    Its restorative power strengthens and energizes your body,
                    creating a foundation for well-being.{" "}
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
            <div className="hidden lg:flex">
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden flex">
        <RightSlider />
      </div>
    </div>
  );
};

export default ExploreProgram;

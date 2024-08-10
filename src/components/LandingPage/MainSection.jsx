import { useNavigate } from "react-router-dom";
import { usePopup } from "../../context/PopupContext";
import redDotIcon from "../../assets/redDotIcon.png";
import useInView from "../../utils/useInView";

const MainSection = () => {
  const { togglePopup, toggleWelcomePopup } = usePopup();
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="mx-10 sm:mx-12 md:mx-14 lg:mx-16 py-24 2xl:py-28 2xl:h-[768px] sm:h-[668px] h-[768px]">
        <div className="relative flex justify-center h-full bg-cover bg-no-repeat bg-center rounded-2xl bgimage">
          <div className="flex flex-col space-y-4 p-8 text-[#fff7e3] justify-center">
            <h1
              ref={ref}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-satoshi font-bold text-shadow-custom sm:w-2/3 ${
                inView ? "animate-fade-up" : ""
              }`}
            >
              Experience Peace with Shoonya’s Yoga Programs rooted in Ancient
              Wisdom
            </h1>
            <p
              className={`w-2/3 sm:w-1/2 font-light text-sm lg:text-base text-shadow-custom ${
                inView ? "animate-fade-up" : ""
              }`}
            >
              Shoonya Life offers unique and comprehensive wellbeing programs
              designed to address the specific needs of corporate professionals.
            </p>
            <div className="flex flex-col sm:flex-row pt-4 space-y-2 sm:space-x-2 w-fit">
              <button
                className="hover:animate-jump w-fit px-4 py-2 bg-[var(--bg-yellow)] text-[var(--bg-brown)] rounded-full flex items-center"
                onClick={() => toggleWelcomePopup()}
              >
                <p>Register for free session</p>
              </button>
              <button
                className="hover:animate-jump w-fit px-4 py-2 border border-[var(--bg-brown)] bg-[var(--bg-brown)] text-white rounded-full flex items-center"
                onClick={() => navigate("/marketplace")}
              >
                <p>Explore Classes</p>
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 animate-pulse">
            <button className="flex items-center space-x-2 px-4 py-2 bg-[var(--bg-yellow)] text-[var(--bg-brown)] rounded-full">
              <img src={redDotIcon} alt="Live Session" className="h-[14px]" />
              <p onClick={() => togglePopup()}>Live Session</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

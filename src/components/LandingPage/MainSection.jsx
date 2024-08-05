import { useNavigate } from "react-router-dom";
import { usePopup } from "../../context/PopupContext";
import redDotIcon from "../../assets/redDotIcon.png";
import useInView from "../../utils/useInView";

const MainSection = () => {
  const { togglePopup, toggleWelcomePopup } = usePopup();
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <div className="relative flex justify-center min-h-[30rem] mt-4 mx-16 bg-cover bg-center bg-no-repeat rounded-2xl bg-[url('/hero_background_2.webp')]">
      <div className="flex flex-col gap-4 p-8 text-[#fff7e3] justify-center">
        <h1
          ref={ref}
          className={`text-5xl font-satoshi font-bold text-shadow-custom w-2/3 ${
            inView ? "animate-fade-up" : ""
          }`}
        >
          Experience Peace with Shoonya’s Yoga Programs rooted in Ancient Wisdom
        </h1>
        <p
          className={`w-1/2 font-light text-shadow-custom ${
            inView ? "animate-fade-up" : ""
          }`}
        >
          Shoonya Life offers unique and comprehensive wellbeing programs
          designed to address the specific needs of corporate professionals.
        </p>
        <div className="flex mt-4 gap-2">
          <button
            className="hover:animate-jump px-4 py-2 bg-[var(--bg-yellow)] text-[var(--bg-brown)] rounded-full flex items-center"
            onClick={() => toggleWelcomePopup()}
          >
            <p>Register for free session</p>
          </button>
          <button
            className="hover:animate-jump px-4 py-2 border border-[var(--bg-brown)] bg-[var(--bg-brown)] text-white rounded-full flex items-center"
            onClick={() => navigate("/marketplace")}
          >
            <p>Explore Classes</p>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 animate-pulse">
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-yellow)] text-[var(--bg-brown)] rounded-full">
          <img src={redDotIcon} alt="Live Session" className="h-[14px]" />
          <p onClick={() => togglePopup()}>Live Session</p>
        </button>
      </div>
    </div>
  );
};

export default MainSection;

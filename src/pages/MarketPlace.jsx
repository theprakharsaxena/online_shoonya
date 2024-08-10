import Footer from "../components/Footer";
import { usePopup } from "../context/PopupContext";
import { useNavigate } from "react-router-dom";
import ProgramsList from "../utils/ProgramsList";
import profileImg from "../assets/Footer/brand_only_logo.jpeg";
import useInView from "../utils/useInView";
import OurProduct from "../components/about/OurProduct";
import OurProgram from "../components/LandingPage/OurProgram";

const MarketPlace = () => {
  const { togglePopup } = usePopup();
  const navigate = useNavigate();
  const { title, image, description } = ProgramsList[5];
  const [ref, inView] = useInView();

  return (
    <div className="w-full">
      <section className="max-w-screen-2xl mx-auto">
        <div className="2xl:py-28 py-24 px-16">
          <div className="flex justify-start min-h-[40vh] w-full relative mt-4 bg-[url('/program/marketplace_banner.webp')] bg-cover bg-no-repeat bg-right rounded-2xl">
            <div className="flex flex-col justify-center gap-4 p-8 text-[var(--bg-yellow)]">
              {" "}
              {/* Heading */}
              <h1
                className={`text-5xl font-satoshi font-bold text-shadow-custom w-2/3 ${
                  inView ? "animate-fade-up" : ""
                }`}
              >
                {title}
              </h1>
              <p
                className={`w-1/2 font-light text-shadow-custom ${
                  inView ? "animate-fade-up" : ""
                }`}
              >
                {description}
              </p>
              <div className="flex mt-4 gap-2">
                <button
                  className="hover:animate-jump px-4 py-2 bg-[var(--bg-yellow)] text-[var(--bg-brown)] rounded-full flex items-center"
                  onClick={() => navigate("/product/76")}
                >
                  Explore Program
                </button>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 animate-pulse">
              <button className="flex items-center gap-2 text-white">
                <img
                  src={profileImg}
                  alt="param yoga"
                  className="rounded-full w-11 h-11 bg-white p-1"
                />
                <p onClick={() => togglePopup()}>Param Yoga</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[var(--bg-yellow)] max-w-screen-2xl mx-auto">
        <OurProduct />
      </div>
      {/* <div className="flex flex-col items-center p-8 w-full bg-white rounded-lg">
        <p className="text-2xl font-bold text-center mb-4">
          If you are a passionate yoga teacher willing to change the global
          wellbeing landscape apply now
        </p>
        <button className="bg-[var(--text-blue)] text-white py-2 px-4 rounded-lg">
          <Link to={"/home"} style={{ color: "white" }}>
            Teach with Shoonya Life
          </Link>
        </button>
      </div> */}
      <OurProgram shortened={false} />
      <Footer />
    </div>
  );
};

export default MarketPlace;

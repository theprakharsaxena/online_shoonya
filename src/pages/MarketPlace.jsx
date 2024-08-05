import ProductCards from "../components/ProductCards";
import ProgramCards from "../components/ProgramCards";
import Footer from "../components/Footer";
import { usePopup } from "../context/PopupContext";
import { useNavigate } from "react-router-dom";
import ProgramsList from "../utils/ProgramsList";
import profileImg from "../assets/Footer/brand_only_logo.jpeg";
import useInView from "../utils/useInView";
import OurProgram from "../components/LandingPage/OurProgram";
import rightArrowSvg from "../assets/LandingPage/right_arrow.svg";

const MarketPlace = () => {
  const { togglePopup } = usePopup();
  const navigate = useNavigate();
  const { title, image, description } = ProgramsList[5];
  const [ref, inView] = useInView();

  return (
    <div className="w-full">
      <section className="py-20 px-16">
        <div className="flex justify-start w-full relative h-[20rem] mt-4 bg-[url('/program/marketplace_banner.webp')] bg-cover bg-no-repeat bg-right rounded-2xl">
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
      </section>
      <section className="min-h-[600px] py-20 px-16 bg-[var(--bg-yellow)]">
        <OurProgram />
        <ProductCards />
      </section>
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
      <section className="min-h-[600px] py-20 px-16">
        <div
          className={`flex flex-col gap-2.5 w-full ${
            inView ? "animate-fade-up" : ""
          }`}
          ref={ref}
        >
          <div className="flex justify-between items-center gap-2.5">
            <p className="font-sentinent text-5xl font-medium">Our Programs</p>
            <button
              className="px-4 py-2 rounded-full border border-black flex items-center justify-center bg-white gap-2.5 hover:animate-fade-right"
              onClick={() => navigate("/marketplace")}
            >
              <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
            </button>
          </div>
          <p className="text-lg">
            The professional world is demanding. Constant pressure,
          </p>
        </div>
        <ProgramCards />
      </section>
      <Footer />
    </div>
  );
};

export default MarketPlace;

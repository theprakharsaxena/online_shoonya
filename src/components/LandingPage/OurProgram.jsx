import { useNavigate } from "react-router-dom";
import rightArrowSvg from "../../assets/LandingPage/right_arrow.svg";
import useInView from "../../utils/useInView";
import ProgramCards from "../ProgramCards";

const OurProgram = ({ shortened, background }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <section className={`mx-10 sm:mx-12 md:mx-14 lg:mx-16 my-20`}>
      <div className="flex flex-col space-y-14">
        <div
          className={`flex flex-col gap-2.5 w-full ${
            inView ? "animate-fade-up" : ""
          }`}
          ref={ref}
        >
          <p className="font-satoshi font-medium">
            Investing in Yourself Starts Here
          </p>
          <div className="flex justify-between items-center gap-2.5">
            <p className="font-sentinent text-xl sm:text-5xl font-medium">
              Our Programs
            </p>
            <button
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-black flex items-center justify-center bg-white gap-2.5 hover:animate-fade-right"
              onClick={() => navigate("/marketplace")}
            >
              <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
            </button>
          </div>
          <p className="text-base sm:text-lg w-9/12 sm:w-full">
            Reap the maximum benefits possible from your Yoga practice.
          </p>
        </div>
        <ProgramCards shortened={shortened} background={background} />
      </div>
    </section>
  );
};

export default OurProgram;

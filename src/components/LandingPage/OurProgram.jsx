import { useNavigate } from "react-router-dom";
import rightArrowSvg from "../../assets/LandingPage/right_arrow.svg";
import useInView from "../../utils/useInView";
import ProgramCards from "../ProgramCards";

const OurProgram = ({ shortened, background }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div
        className={`mx-10 sm:mx-12 md:mx-14 lg:mx-16 my-20 2xl:h-[768px] lg:h-[668px]`}
      >
        <div className="flex flex-col space-y-14">
          <div
            className={`flex flex-col gap-2.5 w-full ${
              inView ? "animate-fade-up" : ""
            }`}
            ref={ref}
          >
            <p className="font-satoshi font-medium text-xs sm:text-base">
              Investing in Yourself Starts Here
            </p>
            <div className="flex justify-between items-center gap-2.5">
              <p className="font-sentinent text-2xl sm:text-5xl font-medium">
                Our Programs
              </p>
              <button
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-black flex items-center justify-center bg-white gap-2.5 hover:animate-fade-right"
                onClick={() => navigate("/marketplace")}
              >
                <p>View all</p>{" "}
                <img
                  src={rightArrowSvg}
                  alt="right_arrow"
                  className="w-3.5 sm:w-4.5"
                />
              </button>
            </div>
            <p className="text-sm sm:text-lg w-9/12 sm:w-full">
              Reap the maximum benefits possible from your Yoga practice.
            </p>
          </div>
          <ProgramCards shortened={shortened} background={background} />
        </div>
      </div>
    </section>
  );
};

export default OurProgram;

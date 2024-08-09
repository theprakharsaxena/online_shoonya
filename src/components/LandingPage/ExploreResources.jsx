import { useNavigate } from "react-router-dom";
import rightArrowSvg from "../../assets/LandingPage/right_arrow.svg";
import useInView from "../../utils/useInView";
import EventCards from "../EventCards";

const ExploreResources = ({ shortened }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div
        className={`mx-10 sm:mx-12 md:mx-14 lg:mx-16 mb-20 2xl:h-[768px] lg:h-[668px]`}
      >
        <div className="flex flex-col space-y-14">
          <div
            className={`w-full ${inView ? "animate-fade-up" : ""}`}
            ref={ref}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2.5 sm:space-y-2.5 sm:space-x-2.5">
              <p className="font-sentinent text-2xl sm:text-5xl font-semibold sm:font-medium">
                Explore Resources
              </p>
              <button
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-black flex items-center justify-center bg-white space-x-2.5 hover:animate-fade-right"
                onClick={() => navigate("/resources")}
              >
                <p>View all</p>{" "}
                <img
                  src={rightArrowSvg}
                  alt="right_arrow"
                  className="w-3.5 sm:w-4.5"
                />
              </button>
            </div>
          </div>
          <EventCards shortened={shortened} />
        </div>
      </div>
    </section>
  );
};

export default ExploreResources;

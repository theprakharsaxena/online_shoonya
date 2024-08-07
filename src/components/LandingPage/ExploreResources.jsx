import { useNavigate } from "react-router-dom";
import rightArrowSvg from "../../assets/LandingPage/right_arrow.svg";
import useInView from "../../utils/useInView";
import EventCards from "../EventCards";

const ExploreResources = ({ shortened }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <section className={`mx-10 sm:mx-12 md:mx-14 lg:mx-16 mb-20`}>
      <div className="flex flex-col space-y-14">
        <div className={`w-full ${inView ? "animate-fade-up" : ""}`} ref={ref}>
          <div className="flex justify-between items-center gap-2.5">
            <p className="font-sentinent text-5xl font-medium">
              Explore Resources
            </p>
            <button
              className="px-4 py-2 rounded-full border border-black flex items-center justify-center bg-white gap-2.5 hover:animate-fade-right"
              onClick={() => navigate("/resources")}
            >
              <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
            </button>
          </div>
        </div>
        <EventCards shortened={shortened} />
      </div>
    </section>
  );
};

export default ExploreResources;

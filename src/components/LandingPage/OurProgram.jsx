import { useNavigate } from "react-router-dom";
import rightArrowSvg from "../../assets/LandingPage/right_arrow.svg";
import useInView from "../../utils/useInView";

const OurProgram = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
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
        <p className="font-sentinent text-5xl font-medium">Our Programs</p>
        <button
          className="px-4 py-2 rounded-full border border-black flex items-center justify-center bg-white gap-2.5 hover:animate-fade-right"
          onClick={() => navigate("/marketplace")}
        >
          <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
        </button>
      </div>
      <p className="text-lg">
        Reap the maximum benefits possible from your Yoga practice.
      </p>
    </div>
  );
};

export default OurProgram;

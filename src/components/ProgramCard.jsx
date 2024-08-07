import rightArrow from "../assets/LandingPage/arrow_right2.png";
import { useNavigate } from "react-router-dom";
import ProgramsList from "../utils/ProgramsList";

const ProgramCard = ({
  program: { id, name, description, background },
  idx,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[calc(100vh/1.4)] border border-[var(--Brand-colors-Base)] p-3 rounded-xl flex flex-col gap-4 duration-300 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-white">
      <div className="overflow-hidden rounded-lg">
        <img
          src={ProgramsList[idx].image}
          alt="program_img"
          className="w-full h-[calc(100vh/4)] md:h-[calc(100vh/3)] object-cover object-center transition-transform transform hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-4 px-2">
        <p className="text-2xl font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
      <div
        className="mt-auto flex justify-center items-center gap-2 p-3 rounded-full bg-[#453736]/90 text-white cursor-pointer hover:bg-[var(--bg-brown)] transition-colors duration-300"
        onClick={() => navigate(`/product/${id}`)}
      >
        Explore Program{" "}
        <img src={rightArrow} alt="right_arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ProgramCard;

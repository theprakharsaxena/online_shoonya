import rightArrow from "../assets/LandingPage/arrow_right2.png";
import { useNavigate } from "react-router-dom";
import ProgramsList from "../utils/ProgramsList";

const ProgramCard = ({
  program: { id, name, description, background, start_date, batch = 1 },
  idx,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="w-full h-full cursor-pointer border border-[var(--Brand-colors-Base)] p-3 rounded-xl flex flex-col gap-4 duration-300 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-white"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={ProgramsList[idx].image}
          alt="program_img"
          className="w-full h-[250px] object-cover object-center transition-transform transform hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-white pb-3 px-3 pt-20">
          <p className="text-sm font-medium">Start Date:</p>
          <p className="text-base">
            {new Date(start_date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex px-2 justify-between">
        <p className="text-2xl font-semibold text-gray-800">{name}</p>
        <div className="flex items-center space-x-2 bg-gray-500/10 px-2 rounded-lg">
          <p className="text-gray-700 text-sm font-medium">Batch No:</p>
          <p className="text-gray-900 text-base">{batch}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm px-2">{description}</p>
      <div className="mt-auto flex justify-center items-center gap-2 p-3 rounded-full bg-[#453736]/90 text-white cursor-pointer hover:bg-[var(--bg-brown)] transition-colors duration-300">
        Explore Program{" "}
        <img src={rightArrow} alt="right_arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ProgramCard;

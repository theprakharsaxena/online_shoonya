import React from "react";
import ProgramsList from "../utils/ProgramsList";
// import productStar from '../assets/ProductPage/'
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import rightArrow from "../assets/LandingPage/arrow_right2.png";

const ProductCard = ({
  program: { id, name, image, description, price, original_price },
  idx,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-w-[300px] w-full max-w-sm min-h-[420px] border border-[var(--Brand-colors-Base)] p-3 rounded-xl flex flex-col gap-4 duration-300 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-white">
      <div className="h-[240px] overflow-hidden rounded-lg">
        <img
          src={ProgramsList[idx].image}
          alt="program_img"
          className="w-full h-full object-cover object-center transition-transform transform hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-4 px-2">
        <p className="text-2xl font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex flex-col gap-[0.6rem] mt-[-0.2rem] px-[0.6rem]">
        <div className="flex gap-[0.3rem] items-center">
          <CiStar className="text-lg" />
          <CiStar className="text-lg" />
          <CiStar className="text-lg" />
          <CiStar className="text-lg" />
          <CiStar className="text-lg" />
          <p className="text-[#858585]">(0)</p>
        </div>
        <div className="flex gap-[0.5rem] items-center">
          <p className="font-satoshi font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            €{price}
          </p>
          <p className="text-[#858585]">{ProgramsList[idx].original_price}</p>
        </div>
      </div>
      <div
        className="mt-auto flex justify-center items-center gap-2 p-3 rounded-full bg-[#453736]/90 text-white cursor-pointer hover:bg-[var(--bg-brown)] transition-colors duration-300"
        onClick={() => navigate(`/product/${id}`)}
      >
        Know More <img src={rightArrow} alt="right_arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ProductCard;

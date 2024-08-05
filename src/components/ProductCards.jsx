import React from "react";
import { useAuth } from "../context/AuthContext";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const ProductCards = () => {
  const { programsList } = useAuth();
  const sortedProgramsList = programsList.sort((a, b) => a.price - b.price);

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {sortedProgramsList.map((program, idx) => (
          <div key={program.id}>
            <ProductCard program={program} idx={idx} />
          </div>
        ))}
        {sortedProgramsList.length <= 0 && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCards;

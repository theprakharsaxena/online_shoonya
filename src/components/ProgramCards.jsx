import React from "react";
import { useAuth } from "../context/AuthContext";
import ProgramCard from "./ProgramCard";
import SkeletonCard from "./SkeletonCard";

const ProgramCards = ({ shortened }) => {
  const { programsList } = useAuth();
  const sortedProgramsList = programsList.sort((a, b) => a.price - b.price);
  const newProgramsList = shortened
    ? sortedProgramsList?.slice(0, 3)
    : sortedProgramsList;
  console.log(newProgramsList);

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {newProgramsList?.map((program, idx) => (
          <ProgramCard key={program.title} idx={idx} program={program} />
        ))}
        {newProgramsList?.length <= 0 && (
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

export default ProgramCards;

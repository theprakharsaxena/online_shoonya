const SkeletonCard = () => {
  return (
    <div className="min-w-[300px] w-full max-w-sm min-h-[420px] p-3 rounded-xl flex flex-col gap-4 shadow-lg bg-white">
      <div className="h-[240px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse"></div>
      <div className="flex flex-col gap-4 px-2">
        <h2 className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></h2>
        <h2 className="h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></h2>
      </div>
      <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-pulse"></div>
    </div>
  );
};

export default SkeletonCard;

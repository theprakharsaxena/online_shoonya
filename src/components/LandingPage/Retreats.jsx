import useInView from "../../utils/useInView";

const Retreats = () => {
  const [ref, inView] = useInView();
  console.log(inView, "++++++++");

  return (
    <div className="bg-[#FFF7E3] flex w-full min-h-screen py-28 px-16">
      <div className="flex flex-col w-full items-center">
        <h2
          className={`font-bold text-6xl xl:w-[50%] lg:w-[65%] md:w-[80%] text-center mb-5 font-sentinent ${
            inView ? "animate-fade-up" : ""
          }`}
          ref={ref}
        >
          Revitalize Your Mind and Body
        </h2>
        <h5
          className={`xl:w-[45%] lg:w-[60%] md:w-[75%] text-center font-satoshi mb-8 ${
            inView ? "animate-fade-up" : ""
          }`}
        >
          Escape, relax, and rejuvenate in our serene retreat. Recharge your
          spirit with expertly curated activities and return refreshed.
        </h5>
        <button
          className={`bg-[#453736] text-white rounded-[33px] py-3 px-6 flex space-x-2 items-center mb-20 hover:animate-fade-right`}
        >
          <p>Explore Retreats</p>
          <img src="/retreats/alt-arrow-right.png" alt="right arrow" />
        </button>
        <div className="grid grid-cols-2 gap-6">
          <img src="/retreats/lightbox2.webp" className="h-[742px]" />
          <div className="grid grid-cols-1 gap-[38px]">
            <img src="/retreats/lightbox.webp" className="h-[352px]" />
            <img src="/retreats/lightbox1.webp" className="h-[352px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retreats;

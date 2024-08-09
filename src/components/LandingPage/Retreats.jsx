import useInView from "../../utils/useInView";

const Retreats = () => {
  const [ref, inView] = useInView();
  console.log(inView, "++++++++");

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="px-10 sm:px-12 md:px-14 lg:px-16 py-20 2xl:h-[768px] lg:h-[668px] bg-[#FFF7E3] relative">
        <div className="absolute bottom-0 left-0 hidden lg:flex">
          <img
            src="/home/retreat_bg_desgin_opp.png"
            className="2xl:h-[468px] sm:h-[368px] h-[468px]"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-8 w-full">
          <div className={`${inView ? "animate-fade-up" : ""}`} ref={ref}>
            <h2
              className={`font-semibold sm:font-bold text-2xl sm:text-4xl xl:text-5xl mb-5 font-sentinent`}
            >
              Revitalize Your Mind and Body
            </h2>
            <p className={`font-satoshi mb-8 text-balance`}>
              Escape, relax, and rejuvenate in our serene retreat. Recharge your
              spirit with expertly curated activities and return refreshed.
            </p>
            <button
              className={`bg-[#453736] text-white rounded-[33px] py-3 px-6 flex space-x-2 items-center mb-16 hover:animate-fade-right`}
            >
              <p>Explore Retreats</p>
              <img src="/home/alt-arrow-right.png" alt="right arrow" />
            </button>
          </div>
          <div className="col-span-2 flex flex-col sm:flex-row gap-8">
            <img
              src="/home/lightbox2.webp"
              alt="Lightbox 2"
              className="w-full object-cover 2xl:max-h-[610px] xl:max-h-[510px] sm:min-h-[400px] sm:w-1/2 h-[calc(100vh/2.5)] sm:h-[calc(100vh/1.2)] rounded-lg"
            />
            <div className="flex flex-col gap-8 w-full sm:w-1/2 2xl:max-h-[610px] xl:max-h-[510px] sm:min-h-[400px]">
              <img
                src="/home/lightbox.webp"
                alt="Lightbox"
                className="w-full object-cover h-[calc(100vh/5)] sm:h-[calc(100vh/2.55)] rounded-lg"
              />
              <img
                src="/home/lightbox1.webp"
                alt="Lightbox 1"
                className="w-full object-cover h-[calc(100vh/5)] sm:h-[calc(100vh/2.55)] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;

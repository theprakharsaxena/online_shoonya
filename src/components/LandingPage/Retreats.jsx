import useInView from "../../utils/useInView";

const Retreats = () => {
  const [ref, inView] = useInView();
  console.log(inView, "++++++++");

  return (
    <section className="px-10 sm:px-12 md:px-14 lg:px-16 py-20 bg-[#FFF7E3]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className={`${inView ? "animate-fade-up" : ""}`} ref={ref}>
          <h2 className={`font-bold text-5xl mb-5 font-sentinent`}>
            Revitalize Your Mind and Body
          </h2>
          <p className={`font-satoshi mb-8`}>
            Escape, relax, and rejuvenate in our serene retreat. Recharge your
            spirit with expertly curated activities and return refreshed.
          </p>
          <button
            className={`bg-[#453736] text-white rounded-[33px] py-3 px-6 flex space-x-2 items-center mb-16 hover:animate-fade-right`}
          >
            <p>Explore Retreats</p>
            <img src="/retreats/alt-arrow-right.png" alt="right arrow" />
          </button>
        </div>
        <div className="col-span-2 flex flex-col sm:flex-row gap-8">
          <img
            src="/retreats/lightbox2.webp"
            alt="Lightbox 2"
            className="w-full sm:w-1/2 object-cover h-[calc(100vh/1.2)] rounded-lg"
          />
          <div className="flex flex-col gap-8 w-full sm:w-1/2">
            <img
              src="/retreats/lightbox.webp"
              alt="Lightbox"
              className="w-full h-[calc(100vh/2.55)] object-cover rounded-lg"
            />
            <img
              src="/retreats/lightbox1.webp"
              alt="Lightbox 1"
              className="w-full h-[calc(100vh/2.55)] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;

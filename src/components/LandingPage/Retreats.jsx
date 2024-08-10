import useInView from "../../utils/useInView";
import VideoPlayer from "./VideoPlayer";
import { usePopup } from "../../context/PopupContext";
import retrebg from "../../assets/home/retreat_bg_desgin_opp.png";
import lightbox from "../../assets/home/lightbox.webp";
import altarrowrt from "../../assets/home/alt-arrow-right.png";
import lightbox1 from "../../assets/home/lightbox1.webp";

const Retreats = () => {
  const { togglePopup } = usePopup();

  const [ref, inView] = useInView();

  const wellnessRetreatsHandler = () => {
    togglePopup("Popup at wellness retreat");
  };

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="px-10 sm:px-12 md:px-14 lg:px-16 py-20 bg-[#FFF7E3] relative">
        <div className="absolute bottom-0 left-0 hidden lg:flex">
          <img
            src={retrebg}
            className="2xl:h-[468px] sm:h-[368px] h-[468px]"
            alt="Background design"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-8 w-full">
          <div className={`${inView ? "animate-fade-up" : ""}`} ref={ref}>
            <h2 className="font-semibold sm:font-bold text-2xl sm:text-4xl xl:text-5xl mb-5 font-sentinent">
              Revitalize Your Mind and Body
            </h2>
            <p className="font-satoshi mb-8 text-balance">
              Escape, relax, and rejuvenate in our serene retreat. Recharge your
              spirit with expertly curated activities and return refreshed.
            </p>
            <button
              onClick={wellnessRetreatsHandler}
              className="bg-[#453736] text-white rounded-[33px] py-3 px-6 flex space-x-2 items-center mb-16 hover:animate-fade-right"
            >
              <p>Coming Soon</p>
              <img src={altarrowrt} alt="right arrow" />
            </button>
          </div>
          <div className="col-span-2 flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <VideoPlayer />
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-[100%]">
                <div className="flex flex-col space-y-8 w-full">
                  <img
                    src={lightbox}
                    alt="Lightbox"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <img
                    src={lightbox1}
                    alt="Lightbox 1"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;

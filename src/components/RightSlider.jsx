import Slideimg5 from "../assets/LandingPage/slide_image5.webp";
import Slideimg6 from "../assets/LandingPage/slide_image6.webp";
import Slideimg7 from "../assets/LandingPage/slide_image7.webp";
import Slideimg8 from "../assets/LandingPage/slide_image8.webp";

const images = [Slideimg5, Slideimg6, Slideimg7, Slideimg8];

const RightSlider = () => {
  return (
    <div className="flex gap-2 overflow-hidden relative w-full">
      <div className="flex animate-slideright">
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center p-2 hover:scale-90 transition-transform m-3 h-[175px] ${
              index % 2 === 0 ? "w-[275px]" : "w-[225px]"
            }`}
          >
            <img
              src={image}
              alt={`sliding image ${index + 1}`}
              className={`h-[175px] rounded-lg ${
                index % 2 === 0 ? "w-[275px]" : "w-[225px]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSlider;

import Slideimg1 from "../assets/LandingPage/slide_image1.jpg";
import Slideimg2 from "../assets/LandingPage/slide_image2.jpg";
import Slideimg3 from "../assets/LandingPage/slide_image3.jpg";
import Slideimg4 from "../assets/LandingPage/slide_image4.jpg";

const images = [Slideimg1, Slideimg2, Slideimg3, Slideimg4];

const LeftSlider = () => {
  return (
    <div className="flex gap-2 overflow-hidden relative w-full">
      <div className="flex animate-slideleft">
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center p-2 hover:scale-90 transition-transform m-3 h-[150px] ${
              index % 2 === 0 ? "w-[250px]" : "w-[200px]"
            }`}
          >
            <img
              src={image}
              alt={`sliding image ${index + 1}`}
              className={`h-[150px] rounded-lg ${
                index % 2 === 0 ? "w-[250px]" : "w-[200px]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSlider;

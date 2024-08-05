import Slideimg1 from "../assets/LandingPage/slide_image1.jpg";
import Slideimg2 from "../assets/LandingPage/slide_image2.jpg";
import Slideimg3 from "../assets/LandingPage/slide_image3.jpg";
import Slideimg4 from "../assets/LandingPage/slide_image4.jpg";
import Slideimg5 from "../assets/LandingPage/slide_image5.webp";
import Slideimg6 from "../assets/LandingPage/slide_image6.webp";
import Slideimg7 from "../assets/LandingPage/slide_image7.webp";
import Slideimg8 from "../assets/LandingPage/slide_image8.webp";

const imagesSet1 = [Slideimg1, Slideimg2, Slideimg4, Slideimg3];
const imagesSet2 = [Slideimg5, Slideimg6, Slideimg7, Slideimg8];

const ImageSlide = ({ img, index, doubleHeight }) => (
  <div
    className={`flex justify-center items-center p-2 hover:scale-90 transition-transform m-3 ${
      doubleHeight ? "h-[301.704px]" : "h-[150.852px]"
    }`}
  >
    <img
      src={img}
      alt={`sliding image ${index + 1}`}
      className={`w-[248.841px] rounded-lg object-cover ${
        doubleHeight ? "h-[301.704px]" : "h-[150.852px]"
      }`}
    />
  </div>
);

function Slider() {
  return (
    <div className="blend-effect-top">
      <div className="flex flex-row gap-2 overflow-hidden relative h-[700px] w-[550px] blend-effect-bottom">
        <div className="flex flex-col animate-slide1">
          {[...imagesSet1, ...imagesSet1, ...imagesSet1].map((img, index) => (
            <ImageSlide
              img={img}
              index={index}
              doubleHeight={index % 2 === 0}
              key={index}
            />
          ))}
        </div>

        <div className="flex flex-col animate-slide2">
          {[...imagesSet2, ...imagesSet2, ...imagesSet2].map((img, index) => (
            <ImageSlide
              img={img}
              index={index}
              doubleHeight={index % 2 === 0}
              key={index + imagesSet1.length * 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;

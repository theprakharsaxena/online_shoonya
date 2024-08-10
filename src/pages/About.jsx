import AboutStats from "../components/AboutStats";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { usePopup } from "../context/PopupContext";
import RotationalImage from "../components/about/RotationalImage";
import useInView from "../utils/useInView";
import aboutbgDesign from "../assets/about/about_bg_design.png"

const About = () => {
  const { toggleContactPopupState } = usePopup();
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <div className="flex flex-col">
      <section className="max-w-screen-2xl mx-auto ">
        <div className="px-10 sm:px-12 md:px-14 lg:px-16 py-24 2xl:py-28 2xl:h-[768px] lg:h-[668px]">
          <div className="flex flex-col space-y-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full items-center 2xl:h-[400px] xl:h-[350px] lg:h-[300px]">
              <h2 className="font-sentinent order-2 sm:order-1 lg:col-span-2 text-4xl lg:text-5xl xl:text-6xl font-medium ">
                Find the limitless potential within by connecting with the
                Infinite
              </h2>
              <div className="col-span-1 order-1 sm:order-2 mb-8 sm:mb-0 flex justify-center">
                <RotationalImage />
              </div>
            </div>
            <div
              ref={ref}
              className={`w-full flex flex-col items-center gap-4 text-[var(--text-blue)] lg:h-[168px] ${inView ? "animate-fade-up" : ""
                }`}
            >
              <p className="text-3xl lg:text-3xl font-medium text-center">
                Touching Stillness within you Leads to infinite possibilities
                outside you
              </p>
              <p className="text-lg font-light text-center">
                The mental disorders are on a constant rise. Stress and anxiety
                almost always find a way to interrupt our daily flow of life.
                How to overcome the constant nudging of frustration that
                follows? By practicing specially designed Yoga programs and
                lifestyle changes delivered by the certified Yoga Teachers at
                Shoonya Life
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutStats />
      {/* <div className={styles.aboutImgDiv}>
          <img src={YogaImg} alt="about_img" />
        </div> */}
      <div className="flex flex-col text-[var(--text-blue)] bg-[var(--bg-yellow)] max-w-screen-2xl mx-auto">
        <section className="flex flex-col gap-10 px-10 sm:px-12 md:px-14 lg:px-16 py-20">
          <div className="grid xl:grid-cols-3 lg:grid-cols-5 grid-cols-1">
            <div className="flex flex-col gap-4 w-full xl:col-span-2 lg:col-span-3">
              <p className="text-base sm:text-lg font-satoshi">
                What separates us from the rest
              </p>
              <p className="text-3xl sm:text-4xl font-semibold font-sentinent">
                We value Joy over Distraction & Health over Exhaustion
              </p>
              <p className="text-lg sm:text-xl font-satoshi font-normal">
                Care and harmony lie at the core of our values. Our practices
                empower you to move with ease and grace, fostering a strong and
                resilient body that supports your exploration of your inner
                world. Through this holistic approach, Shoonya Life guides you
                toward a life filled with joy, vitality, and a renewed sense of
                purpose.
              </p>
            </div>
            <div className="hidden lg:flex justify-end xl:col-span-1 lg:col-span-2">
              <img src={aboutbgDesign} alt="logo" className="" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-2xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">
                Authentic and Trustworthy
              </p>
              <p>
                Yoga at Shoonya Life is far different from what you find
                elsewhere. The Yoga Asanas and Mudaras come from the roots of a
                thousand years of wisdom and guru tradition. Backed by science
                and steeped in tradition, Yoga's benefits are waiting to be
                woven into your daily life. You will discover a love not just
                for your physical form, but for the boundless potential that
                resides within.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">
                Undiluted and Pure
              </p>
              <p>
                You don’t do Yoga, but you experience it to become meditative
                and touch oneness and stillness within you. Shoonya’s team
                believes in the purity of actions (kriya), yoga, and meditation
                rooted in thousands of years of knowledge and transmission by
                masters. We offer undiluted and pure Yoga to help you discover
                your untapped potential. Professional life requires constant
                innovation and zeal, we help you achieve just that
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">
                Thoughtful and Unconditional
              </p>
              <p>
                Do you find yourself wondering if it's even made for you? The
                answer lies in the spiral of thoughts that crosses your mind
                every day. Yoga offers clarity of thought and peace paired with
                internal joy. Therefore, we act as the catalyst in your
                individual journey. Each program is prepared precisely for you,
                keeping in mind the constant struggles professionals face.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-10 px-10 sm:px-12 md:px-14 lg:px-16 py-20">
          <div className="w-full py-2">
            <p className="text-5xl font-semibold font-sentinent">Our Team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">
                Driven by Experience
              </p>
              <p>
                We, the founders, come from tech backgrounds and have also
                practised yoga, experiencing firsthand the high stress of
                scaling companies in the corporate world.We are also joined by
                the most experienced yoga teachers.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">
                Foundation of Shoonya
              </p>
              <p>
                Moved by our personal challenges with stress and lack of access
                to holistic wellness, we created Shoonya Life to fill this void.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">
                Passionate Mission
              </p>
              <p>
                Our goal is to harness technology to connect authentic wellness
                providers with seekers, facilitating accessible, effective
                wellness solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-gray-500/10 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">Team Dynamic</p>
              <p>
                Our passionate teams are based in Germany and India and are
                committed to building a platform that not only connects but also
                supports the well-being of the community.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center px-10 sm:px-12 md:px-14 lg:px-16 pb-20">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-semibold">Still have a question?</p>
            <p className="text-lg font-normal text-center">
              Support details to capture customers that might be on the fence.
            </p>
            <button
              className="py-2 px-4 border border-black rounded-full bg-white"
              onClick={() => toggleContactPopupState()}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

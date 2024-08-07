import Play from "../assets/LandingPage/Play Circle.png";
import Play3 from "../assets/LandingPage/Medal Star Circle.png";
import HandStar from "../assets/LandingPage/Hand Stars.png";
import meditIcon from "../assets/LandingPage/Meditation.svg";
import useInView from "../utils/useInView";

const AboutShoonya = () => {
  const [ref, inView] = useInView();

  return (
    <div className="mb-20">
      <section className="px-10 sm:px-12 md:px-14 lg:px-16 py-20 bg-[var(--add-ons-base)] text-brown-800">
        <div className="flex flex-col space-y-14">
          <div
            className={`flex flex-col space-y-5 ${
              inView ? "animate-fade-up" : ""
            }`}
            ref={ref}
          >
            <p className={`text-5xl font-bold font-sentinent`}>Why Shoonya?</p>
            <p className="text-lg">
              Shoonya Life is designed to ensure that your dynamic lifestyle is
              perfectly in sync with your mind, body, and soul. We aim to bring
              authentic yoga combined with lifestyle changes, spiritual
              experiences, and live coaching to lead a life of bliss, purity,
              love, and kindness.
            </p>
          </div>
          <div className="mt-5 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col p-6 gap-3 sm:gap-6 bg-[var(--Brand-colors-Base)] w-full lg:w-2/5 justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img className="w-16 mx-auto" src={HandStar} alt="hand stars" />
              <h3 className="text-xl sm:text-2xl font-sentinent font-medium text-center">
                Signature Programs for Corporate Professionals
              </h3>
              <p className="text-base sm:text-lg font-satoshi text-center">
                Shoonya Life understands the unsaid struggles professionals
                face. Our accredited Signature Programs with guided teacher
                assistance utilize yoga’s ancient wisdom passed down through
                generations.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full lg:w-3/5 justify-between">
              <div className="bg-[var(--Brand-colors-Base)] p-6 flex gap-3 sm:gap-6 rounded-lg items-center shadow-lg transition-transform transform hover:scale-105">
                <img className="w-12" src={Play} alt="play_button" />
                <div>
                  <h4 className="text-lg sm:text-xl font-medium font-sentinent">
                    Claims Backed by the Roots We Come From
                  </h4>
                  <p className="text-sm sm:text-base font-satoshi">
                    The connection people share with Earth can be best expressed
                    through meditation and Yoga as prime languages and connect
                    to nature at a deeper level.
                  </p>
                </div>
              </div>
              <div className="bg-[var(--Brand-colors-Base)] p-6 flex gap-3 sm:gap-6 rounded-lg items-center shadow-lg transition-transform transform hover:scale-105">
                <img className="w-12" src={meditIcon} alt="meditation_icon" />
                <div>
                  <h4 className="text-lg sm:text-xl font-medium font-sentinent">
                    Certified Instructors deliver Signature Programs
                  </h4>
                  <p className="text-sm sm:text-base font-satoshi">
                    Our team includes experts and certified teachers selected
                    through a rigorous evaluation process to help you attain
                    physical agility and a profound sense of calmness within.
                  </p>
                </div>
              </div>
              <div className="bg-[var(--Brand-colors-Base)] p-6 flex gap-3 sm:gap-6 rounded-lg items-center shadow-lg transition-transform transform hover:scale-105">
                <img className="w-12" src={Play3} alt="medal_star" />
                <div>
                  <h4 className="text-lg sm:text-xl font-medium font-sentinent">
                    Holistic Approach to Well-Being
                  </h4>
                  <p className="text-sm sm:text-base font-satoshi">
                    Yoga with other practices like meditation, breathwork,
                    asanas, and healthy lifestyle coaching results in a calm
                    demeanour, significantly improving your emotional
                    regulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutShoonya;

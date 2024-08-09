import useInView from "../../utils/useInView";

const Rebalance = () => {
  const [ref, inView] = useInView();

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div
        ref={ref}
        className={`flex flex-col w-full items-center space-y-6 px-10 sm:px-12 md:px-14 lg:px-16 ${
          inView ? "animate-fade-up" : ""
        }`}
      >
        <h1 className="text-[var(--text-blue)] text-2xl sm:text-3xl lg:text-4xl font-satoshi font-semibold sm:font-medium text-center">
          Rebalance Your Professional Life with Shoonya
        </h1>
        <p className="text-[var(--text-blue)] text-sm sm:text-base lg:text-lg font-satoshi text-justify sm:text-center">
          The professional world is demanding. Constant pressure, long hours of
          work, and information overload may leave you stressed, anxious, and
          disconnected. Practicing pure Yoga helps combat these challenges and
          find harmony amidst the chaos. Yoga empowers you to manage stress,
          improve focus, and cultivate resilience in the face of daily
          challenges.
        </p>
      </div>
    </section>
  );
};

export default Rebalance;

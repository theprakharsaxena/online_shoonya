import useInView from "../../utils/useInView";

const Rebalance = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`flex flex-col w-full items-center gap-6 py-20 px-16 ${
        inView ? "animate-fade-up" : ""
      }`}
    >
      <h1 className="text-[var(--text-blue)] text-4xl font-satoshi font-medium">
        Rebalance Your Professional Life with Shoonya
      </h1>
      <p className="text-[var(--text-blue)] text-lg font-satoshi text-center">
        The professional world is demanding. Constant pressure, long hours of
        work, and information overload may leave you stressed, anxious, and
        disconnected. Practicing pure Yoga helps combat these challenges and
        find harmony amidst the chaos. Yoga empowers you to manage stress,
        improve focus, and cultivate resilience in the face of daily challenges.
      </p>
    </div>
  );
};

export default Rebalance;

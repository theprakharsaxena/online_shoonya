import { useEffect, useState } from "react";
import stats from "../utils/fetchStats";
import useInView from "../utils/useInView";

const CounterCard = ({ data, value, additional }) => {
  const [counterValue, setCounterValue] = useState(0);

  // Only start the interval when the component is in view
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounterValue((prevValue) =>
          prevValue < value
            ? Math.floor(
                prevValue +
                  (value === 7.1 ? 1 : value === 35.4 ? 1 : value === 301 && 6)
              )
            : value
        );
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-5xl sm:text-4xl lg:text-5xl font-medium">
          {counterValue}
          {additional}
        </p>
        <p className="font-light">{data}</p>
      </div>
    </div>
  );
};

const AboutStats = () => {
  return (
    <section className="px-10 sm:px-12 md:px-14 lg:px-16 py-20 bg-gray-200">
      <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-8 text-center">
        {stats.map((item, index) => (
          <CounterCard
            key={index}
            data={item.data}
            value={item.value}
            additional={item.additional}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutStats;

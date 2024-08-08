import React, { useEffect } from "react";

const TeachWithShoonya = () => {
  useEffect(() => {
    // Load Tally widget script when iframe is shown
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen pt-[70px] pb-2">
      <div className="relative w-full h-full">
        <iframe
          data-tally-src="https://tally.so/r/nGL62L?transparentBackground=1"
          className="absolute inset-0 w-full h-full border-0 bg-[var(--bg-yellow)]"
          title="Teach With Shoonya"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default TeachWithShoonya;

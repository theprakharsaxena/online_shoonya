import { useEffect, useRef } from "react";
import useInView from "../../utils/useInView";
import retreats2 from "../../assets/home/retreats2.mp4"

const VideoPlayer = () => {
  const [ref, inView] = useInView();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div className="relative pb-[125%] sm:pb-0 sm:h-[100%]" ref={ref}>
      <video
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover rounded-lg"
        ref={videoRef}
        controls
        muted
        loop
      >
        <source src={retreats2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute bottom-4 right-4 bg-gray-800 text-white p-2 rounded">
                  <button className="p-2">{inView ? "Pause" : "Play"}</button>
                </div> */}
    </div>
  );
};

export default VideoPlayer;

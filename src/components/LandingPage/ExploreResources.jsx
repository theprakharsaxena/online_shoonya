import { useNavigate } from "react-router-dom";
import styles from "../../styles/LandingPage.module.css";
import utils from "../../styles/utils.module.css";
import rightArrowSvg from "../../assets/LandingPage/right_arrow.svg";
import useInView from "../../utils/useInView";

const ExploreResources = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <div className={styles.programsDiv}>
      {/* <p className={styles.tagLine}>Events</p> */}
      <div className={styles.heading_btn}>
        <p
          className={`${utils.s48} ${utils.sw500} ${
            inView ? "animate-fade-up" : ""
          }`}
          ref={ref}
        >
          Explore Resources
        </p>
        <button
          className={`${utils.btn1} ${styles.programsViewBtn} hover:animate-fade-right`}
          onClick={() => navigate("/resources")}
        >
          <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
        </button>
      </div>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p> */}
    </div>
  );
};

export default ExploreResources;

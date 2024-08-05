import styles from "../styles/LeftSlider.module.css";
import Slideimg1 from "../assets/LandingPage/slide_image1.jpg";
import Slideimg2 from "../assets/LandingPage/slide_image2.jpg";
import Slideimg3 from "../assets/LandingPage/slide_image3.jpg";
import Slideimg4 from "../assets/LandingPage/slide_image4.jpg";

const LeftSlider = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack1}>
        <div className={styles.carouselCard}>
          <img src={Slideimg1} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg2} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg4} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg3} alt="sliding image" className={styles.image} />
        </div>
        {/* List 2 */}
        <div className={styles.carouselCard}>
          <img src={Slideimg1} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg2} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg4} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg3} alt="sliding image" className={styles.image} />
        </div>
        {/* List 3 */}
        <div className={styles.carouselCard}>
          <img src={Slideimg1} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg2} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg4} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg3} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg1} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg2} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg4} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg3} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg1} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg2} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg4} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg3} alt="sliding image" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default LeftSlider;

import React from 'react';
import styles from '../styles/RightSlider.module.css';
import Slideimg5 from '../assets/LandingPage/slide_image5.webp';
import Slideimg6 from '../assets/LandingPage/slide_image6.webp';
import Slideimg7 from '../assets/LandingPage/slide_image7.webp';
import Slideimg8 from '../assets/LandingPage/slide_image8.webp';

const RightSlider = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack2}>
        <div className={styles.carouselCard}>
          <img src={Slideimg5} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg6} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg7} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg8} alt="sliding image" className={styles.image} />
        </div>
        {/* List 2 */}
        <div className={styles.carouselCard}>
          <img src={Slideimg5} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg6} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg7} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg8} alt="sliding image" className={styles.image} />
        </div>
        {/* List 3 */}
        <div className={styles.carouselCard}>
          <img src={Slideimg5} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg6} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg7} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg8} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg5} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg6} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg7} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg8} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg5} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg6} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg7} alt="sliding image" className={styles.image} />
        </div>
        <div className={styles.carouselCard}>
          <img src={Slideimg8} alt="sliding image" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default RightSlider;

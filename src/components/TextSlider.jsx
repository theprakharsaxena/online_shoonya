import React from 'react';
import styles from '../styles/TextSlider.module.css';
import starTwo from '../assets/LandingPage/grey_stars.png';

const TextSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <div className={styles.slideTrack}>
          <div className={styles.slideText}>
            <h1>LIVE TRAINING YOGA CLASS FOR PROFESSIONALS</h1>
          </div>
          <div className={styles.slideImage}>
            <img src={starTwo} alt="stars" />
          </div>
          <div className={styles.slideText}>
            <h1>LIVE TRAINING YOGA CLASS FOR PROFESSIONALS</h1>
          </div>
          <div className={styles.slideImage}>
            <img src={starTwo} alt="stars" />
          </div>
          <div className={styles.slideText}>
            <h1>LIVE TRAINING YOGA CLASS FOR PROFESSIONALS</h1>
          </div>
          <div className={styles.slideImage}>
            <img src={starTwo} alt="stars" />
          </div>
          <div className={styles.slideText}>
            <h1>LIVE TRAINING YOGA CLASS FOR PROFESSIONALS</h1>
          </div>
          <div className={styles.slideImage}>
            <img src={starTwo} alt="stars" />
          </div>
          <div className={styles.slideText}>
            <h1>LIVE TRAINING YOGA CLASS FOR PROFESSIONALS</h1>
          </div>
          <div className={styles.slideImage}>
            <img src={starTwo} alt="stars" />
          </div>
          <div className={styles.slideText}>
            <h1>LIVE TRAINING YOGA CLASS FOR PROFESSIONALS</h1>
          </div>
          <div className={styles.slideImage}>
            <img src={starTwo} alt="stars" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextSlider;

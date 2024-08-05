import React from 'react'
import landingPageStyles from '../styles/LandingPage.module.css';
import styles from '../styles/ResourcesPage.module.css';
import ProductPageStyles from '../styles/ProductPage.module.css';
import YogaLady from '../assets/LandingPage/yoga_lady_2.jpg';
import EventCardStyles from '../styles/EventCard.module.css'
import rightArrow from '../assets/LandingPage/right_arrow_landing_page_section.png';
import ProgramCardsStyles from '../styles/ProgramCards.module.css';
import EventCard from '../components/EventCard';
import EventsList from '../utils/EventsList';
import { FaArrowRightLong } from 'react-icons/fa6';
import aboutPageStyles from '../styles/About.module.css';
import marketPlaceStyles from '../styles/MarketPlace.module.css'
import utils from '../styles/utils.module.css'
import ProgramCards from '../components/ProgramCards';
import Footer from '../components/Footer';
import { usePopup } from '../context/PopupContext';
import EventCards from '../components/EventCards';
import BlogsList from '../utils/BlogsList';
import { Link } from 'react-router-dom';
import rightArrowSvg from '../assets/LandingPage/right_arrow.svg';

const ResourcesPage = () => {
  const { togglePopup } = usePopup();
  const { category, heading, subheading, link, readmin, img } = BlogsList[0];
  const alteredBlogsList = BlogsList.slice(1, 4);

  return (
    <div className={landingPageStyles.hero}>
      <div className={`${landingPageStyles.programsDiv} ${styles.resourceHeading}`}>
        <div className={landingPageStyles.heading_btn}>
          <p className={`${utils.s56} ${utils.sw500}`}>
            Resources and Tips
          </p>
        </div>
      </div>
      <div className={styles.featuredResourcesWrapper}>
        <p className={`${styles.featuredResourcesHeading} ${utils.s24}`}>Featured Resources</p>
        <div className={styles.featuredResourcesDiv}>
          <div className={styles.featuredResourcesParentImgDiv}>
            <div className={`${ProductPageStyles.productImgDiv} ${styles.resourceImgDiv}`}>
              <img src={img} alt="session_img" />
            </div>
            <div className={styles.resourceHeadings}>
              <div className={EventCardStyles.cat_min}>
                <p>{category}</p>
                <p className={styles.timeRead}>{readmin} min read</p>
              </div>
              <div className={EventCardStyles.infoSection}>
                <p className={`${utils.s32} ${styles.blogSubheading}`}>{heading}</p>
                <p>{subheading}</p>
              </div>
              <div className={styles.readMore}><Link to={link} target='_blank'><p>Read more</p></Link> <img src={rightArrow} alt="right_arrow" /></div>
            </div>
          </div>
          <div className={styles.featuredSubresourceDiv}>
            {alteredBlogsList.map(blog => {
              const { category, heading, link, readmin, img } = blog;
              return (<div className={styles.featuredSubresource}>
                <div className={styles.featuredSubresourceImgDiv}>
                  <img src={img} alt="featured_subresource" />
                </div>
                <div className={styles.featuredResourceInfo}>
                  <div className={EventCardStyles.cat_min}>
                    <p>{category}</p>
                    <p>{readmin} min read</p>
                  </div>
                  <div className={styles.featuredSubresourceTitle}><p className={styles.featuredResourceTitleTxt}>{heading}</p></div>
                  <div className={styles.readMore}><Link to={link} target='_blank'><p>Read more</p></Link> <img src={rightArrow} alt="right_arrow" /></div>
                </div>
              </div>)
            })}
          </div>
        </div>
        <div className={styles.featuredBlogDiv}>
          <p className={`${styles.featuredResourcesHeading} ${utils.s24}`}>Featured blog posts</p>
          <EventCards />
        </div>
        <div>
          <div className={utils.wrapper}>
            <div className={landingPageStyles.programsDiv}>
              <p className={landingPageStyles.tagLine}>Investing in Yourself Starts Here</p>
              <div className={landingPageStyles.heading_btn}>
                <p className={`${utils.s48} ${utils.sw500}`}>
                  Our Programs</p>
                <button className={`${utils.btn1}`} onClick={() => navigate('/marketplace')} >
                  <p>View all</p> <img src={rightArrowSvg} alt="right_arrow" />
                </button>
              </div>
              <p className={`${landingPageStyles.shortSubheading}`} > Reap the maximum benefits possible from your Yoga practice.
              </p>
            </div>
          </div>
          <ProgramCards shortened={true} padding={true} />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage
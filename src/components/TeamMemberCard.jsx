import React from 'react'
import ProgramCardStyles from '../styles/ProgramCard.module.css';
import ProfileImg from '../assets/AboutPage/Profile.png'
import styles from '../styles/TeamMemberCard.module.css'
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import utils from '../styles/utils.module.css'

const TeamMemberCard = () => {
  return (
    <div className={`${ProgramCardStyles.programCard} ${styles.memberCard}`}>
      <div className={ProgramCardStyles.imgSection}>
        <img src={ProfileImg} alt="program_img" />
      </div>
      <div className={`${styles.infoSectionExtra}`}>
        <p className={utils.s20}>Full Name</p>
        <p>Job Title</p>
      </div>
      <p className={styles.memberDesc}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt dolorem ipsa, voluptas quidem esse
      </p>
      <div className={styles.memberCardSocials}>
        <FaLinkedin />
        <FaXTwitter />
        <FaDribbble />
      </div>
    </div>
  )
}

export default TeamMemberCard;
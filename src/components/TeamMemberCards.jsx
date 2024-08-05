import React from 'react'
import ProgramCardsStyles from '../styles/ProgramCards.module.css'
import TeamMemberCard from './TeamMemberCard'
import styles from '../styles/TeamMemberCards.module.css';

const TeamMemberCards = () => {
  return (
    <div div className={ProgramCardsStyles
      .programsContainer} >
      <div className={`${ProgramCardsStyles
        .programCards} ${styles.teamMemberCards}`}>
        <TeamMemberCard />
        <TeamMemberCard />
        {/* <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard /> */}
      </div>
    </div >
  )
}

export default TeamMemberCards
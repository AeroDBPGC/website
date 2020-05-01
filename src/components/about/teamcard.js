import React from "react"

import { FaLinkedin, FaFacebookSquare, FaGlobeAsia } from 'react-icons/fa';

import teamCardStyle from "../../styles/about/teamcard.module.scss"

import Container from "react-bootstrap/Container";

const TeamCard = ({ name, title }) => (
  <div className={teamCardStyle.teamCardOuter}>
    <Container fluid="true" className={teamCardStyle.teamCardInner} style={{ height:`inherit`, padding:`0`, margin:`0`, overflow:`hidden` }}>
      <p className={teamCardStyle.name}>{ name }</p>
      <p className={teamCardStyle.post}><b>{ title }</b></p>
      <p className={teamCardStyle.tap}>(TAP TO CONNECT)</p>
    </Container>
    <div className={teamCardStyle.socialIconContainer}>
      <div className={teamCardStyle.socialIconWrapper}>
        <div className={teamCardStyle.icon}>
          <FaLinkedin />
        </div>
        <div className={teamCardStyle.icon}>
          <FaFacebookSquare />
        </div>
        <div className={teamCardStyle.icon}>
          <FaGlobeAsia />
        </div>
      </div>
    </div>
  </div>
)

export default TeamCard

import React from "react"

import aboutCardStyle from "../../styles/about/aboutcard.module.scss"

const AboutCard = () => (
  <div className={aboutCardStyle.card}>
    <p className={aboutCardStyle.info}>The Aerodynamics Club (AeroD) is a student-run technical club on campus that actively engages students in pursuing education on a multitude of topics with relation to aerodynamics, aerospace engineering, avionics and aviation in general. Founded by Harshvardhan Sripathi in 2008, the club has seen major success as one of the few core engineering-based technical clubs on campus and has attracted a lot of freshers at times of induction.

Members actively participate in several competitions throughout the year all across the country, most notably in design challenges like Boeing’s Aeromodelling challenge at IIT Bombay and Quark’s Trailblazers, and in innovation challenges like Boeing BUILD, where members have placed first in 2019.
    </p>
  </div>
)

export default AboutCard

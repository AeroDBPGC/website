import React from "react"
import { /*FaLinkedin,*/ FaGithub, FaFacebook, /*FaInstagram,*/ FaWikipediaW, FaEnvelope, FaMedium } from 'react-icons/fa';
import footerCardStyle from "../styles/footer/footer.module.scss"

const style = {
  textAlign: `center`,
  lineHeight: `1`,
  fontSize: `1rem`,
}

const style2 = {
  textAlign: `center`,
  lineHeight: `1`,
  fontSize: `1rem`,
  fontWeight: 'bold'
}

const Footer = () => (
  <footer style={{ padding: `0.5rem` }}>
    <div className={footerCardStyle.socialIconContainer}>
      <div className={footerCardStyle.socialIconWrapper}>
        <a aria-label="Github" className={footerCardStyle.icon} href={'https://github.com/orgs/Aerodynamics-Club/'}><FaGithub color="#000" /></a>
        <a aria-label="Facebook" className={footerCardStyle.icon} href={'https://www.facebook.com/AeroD.BITSGoa/'}><FaFacebook color="#000" /></a>
        <a aria-label="Mail" className={footerCardStyle.icon} href={'mailto: ic.aero@goa.bits-pilani.ac.in'}><FaEnvelope color="#000" /></a>
        <a aria-label="Wikipedia" className={footerCardStyle.icon} href={'https://www.bitslite.in/wiki/Clubs/Aerodynamics_Club'}><FaWikipediaW color="#000" /></a>
        <a aria-label="Medium" className={footerCardStyle.icon} href={'https://medium.com/@ic.aero'}><FaMedium color="#000" /></a>
      </div >
    </div >
    <h5 style={style2}>Made over sips of ☕  by <a href="https://github.com/devgoel186">Dev Goel</a>,<a href="https://github.com/varunbankar">Varun Bankar</a> and <a href="https://github.com/bharat787">Bharat Gupta</a></h5>
    <h5 style={style2}>AERODYNAMICS CLUB © 2020-2021</h5>

  </footer >
)

export default Footer

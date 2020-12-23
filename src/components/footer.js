import React from "react"
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWikipediaW, FaEnvelope,FaMedium } from 'react-icons/fa';
import footerCardStyle from "../styles/footer/footer.module.scss"

const style = {
  textAlign: `center`,
  lineHeight: `1`,
  fontSize: `1rem`,
}

const Footer = () => (
  <footer  style={{padding: `0.5rem`}}>
    <h5  style={style}>AERODYNAMICS CLUB © 2020-2021</h5>
    <div className={footerCardStyle.socialIconContainer}>
      <div className={footerCardStyle.socialIconWrapper}></div>
        <div className={footerCardStyle.icon}>
          <a href={'https://github.com/orgs/Aerodynamics-Club/'}><FaGithub color="#000"/></a>
          <a href={'https://www.facebook.com/AeroD.BITSGoa/'}><FaFacebook color="#000"/></a>
          <a href={'mailto: ic.aero@goa.bits-pilani.ac.in'}><FaEnvelope color="#000"/></a>
          <a href={'https://www.bitslite.in/wiki/Clubs/Aerodynamics_Club'}><FaWikipediaW color="#000"/></a>
          <a href={'https://medium.com/@ic.aero'}><FaMedium color="#000"/></a>

        </div>
    </div>
    
  </footer>
)

export default Footer

import React from "react"

import homeLogoStyle from '../../styles/home/homelogo.module.scss'
import logo from "../../images/Logo.svg"

const HomeLogo = () => (
    <>
        <div className={homeLogoStyle.logowrapper}>
            <img src={logo} className={homeLogoStyle.logo} />
        </div>
    </>
)

export default HomeLogo

import React from "react"

import contactAnimationStyle from "../../styles/contact/contactanimation.module.scss"

const ContactAnimation = () => (
    <div className={contactAnimationStyle.contactanimation}>
        <div id={contactAnimationStyle.sky} style={{ width:"100vw" }}>
            <div id={contactAnimationStyle.cloud1} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.cloud2} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.cloud3} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.cloud4} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.cloud5} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.cloud6} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.cloud7} className={contactAnimationStyle.cloud}></div>
            <div id={contactAnimationStyle.aeroplane}></div>
        </div>
    </div>
)

export default ContactAnimation

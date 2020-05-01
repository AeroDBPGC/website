import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";

import contactCardStyle from "../../styles/contact/contactcard.module.scss"

const ContactCard = (props) => (
    <div className={contactCardStyle.contactCard} style={{ background:`${props.background}` }}>
        <div>
          <p className={contactCardStyle.linkTitle}>{ props.title1 }</p>
          <p className={contactCardStyle.linkTitle}>{ props.title2 }</p>
          <p className={contactCardStyle.linkDescription}>{ props.description }</p>
        </div>
    </div>
)

export default ContactCard

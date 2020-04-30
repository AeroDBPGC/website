import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";

import contactCardStyle from "../../styles/contact/contactcard.module.scss"

const ContactCard = (props) => (
    <div className={contactCardStyle.contactcard} style={{ background:`${props.background}` }}>
        <div className={contactCardStyle.image}>
            <p></p>
        </div>
    </div>
)

export default ContactCard

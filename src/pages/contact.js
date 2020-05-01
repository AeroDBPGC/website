import React from "react"

import contactPageStyle from "../styles/contact/contact.module.scss"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactAnimation from "../components/contact/contactanimation"
import ContactCard from "../components/contact/contactcards"

import Header from "../components/header"

const ContactPage = () => (
    <div className={contactPageStyle.wrapper}>
        <Header siteTitle="CONTACT US" />
        <Container fluid="true" className={contactPageStyle.c2}>
            <Row>
                <Col>
                    <ContactAnimation />
                </Col> 
            </Row>
            <Row noGutters="true" style={{ padding:`.5rem`, display:`flex`, flexGrow:`1` }}>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={`linear-gradient(45deg, #606c88, #3f4c6b)`}/>
                </Col>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={"linear-gradient(45deg, #e13680, #a43ab2)"}/>
                </Col>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={"linear-gradient(220deg, #F7971E, #FFD200)"}/>
                </Col>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={"linear-gradient(45deg, #41d8dd, #5583ee)"}/>
                </Col>
            </Row>
        </Container>
    </div>
)

export default ContactPage

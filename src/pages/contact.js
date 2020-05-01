import React from "react"

// Styles for Contact page.
import contactPageStyle from "../styles/contact/contact.module.scss"

// Bootstrap responsive layout.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom components.
import ContactAnimation from "../components/contact/contactanimation"
import ContactCard from "../components/contact/contactcards"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => (
    <div className={contactPageStyle.wrapper}>
        <Header siteTitle="CONTACT US" />
        <Container fluid="true" className={contactPageStyle.container}>
            <Row>
                <Col>
                    <ContactAnimation />
                </Col> 
            </Row>
            <Row noGutters="true" className={contactPageStyle.containerCard}>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={"linear-gradient(45deg, #e13680, #a43ab2)"} title1={"HAVE A"} title2={"QUESTION?"} description={"Connect with us instantly by filling this Google Form."} />
                </Col>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={"linear-gradient(220deg, #F7971E, #FFD200)"} title1={"LOOKING TO"} title2={"FUND US?"} description={"Yay! Please contact us through this form and we will get back ASAP."}/>
                </Col>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={"linear-gradient(45deg, #41d8dd, #5583ee)"} title1={"WANT TO"} title2={"PROPOSE AN IDEA?"} description={"We love to discuss idea and work towards bringing them to life. Click here!"}/>
                </Col>
                <Col lg={6} xl={3} md={6} xs={12}>
                    <ContactCard background={`linear-gradient(45deg, #606c88, #3f4c6b)`} title1={"BITS STUDENT"} title2={"FOR INDUCTION?"} description={"We are very selective with whom we work with. If you think you have got what it takes, hits us up."} />
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
)

export default ContactPage

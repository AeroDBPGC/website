import React from "react"

// For Bootstrap responsive layout.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles for About page.
import aboutPageStyle from "../styles/about/about.module.scss"

// Custom components.
import Header from "../components/header"
import TeamPicture from "../components/about/teampicture"
import AboutCard from "../components/about/aboutcard"
import TeamCard from "../components/about/teamcard"
import Footer from "../components/footer"

// About page.
const AboutPage = () => (
    <>
        <div className={aboutPageStyle.containerMain}>
            <Header siteTitle="ABOUT US" />
            <Container fluid="true">
                <Row>
                    <Col>
                        <TeamPicture />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AboutCard />
                    </Col>
                </Row>
            </Container>
            <Container className={aboutPageStyle.containerTeamCard} fluid="true">
                <Row noGutters="true">
                    <Col xs={12} md={4}>
                        <TeamCard name={`VARUN BANKAR`} title={`PUBG PLAYER`} />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard name={`BHARAT GUPTA`} title={`CORDINATOR`} />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard name={`NIVANT NIBBA`} title={`MEME MATERIAL`} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    </>
)

export default AboutPage
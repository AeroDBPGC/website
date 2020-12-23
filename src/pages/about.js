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

//Images for Team Members
import Bharat from "../images/dp1.jpg"
import Pranjal from "../images/PranjalPrez.jpg"
import Rachit from "../images/RachitSubCo.jpg"
import Ishan from "../images/ishan.jpg"


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
                        <TeamCard
                            name={`PRANJAL ANAND`}
                            title={`PRESIDENT`}
                            link_linkedin={`https://www.linkedin.com/in/pranjal-anand-8906631a5/`}
                            link_mail={`mailto: f20180874@goa.bits-pilani.ac.in`}
                            link_github={`#`}
                            img={Pranjal}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard
                            name={`BHARAT GUPTA`}
                            title={`CHIEF COORDINATOR`}
                            link_linkedin={`https://www.linkedin.com/in/bharat-gupta-a5540a178/`}
                            link_mail={`mailto: f20180446@goa.bits-pilani.ac.in`}
                            link_github={`https://github.com/bharat787`}
                            img={Bharat}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard
                            name={`RACHIT GUPTA`}
                            title={`SUB COORDINATOR`}
                            link_linkedin={`https://www.linkedin.com/in/rachit-gupta-847039194/`}
                            link_mail={`mailto: f20190466@goa.bits-pilani.ac.in`}
                            link_github={`#`}
                            img={Rachit}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard
                            name={`ISHAN NEOGI`}
                            title={`SUB COORDINATOR`}
                            link_linkedin={`https://www.linkedin.com/in/ishan-neogi-5794281a9/`}
                            link_mail={`mailto: f20190393@goa.bits-pilani.ac.in`}
                            link_github={`#`}
                            img={Ishan}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard
                            name={`SANJOG AGARWAL`}
                            title={`INVENTORY HEAD`}
                            link_linkedin={`https://www.linkedin.com/in/sanjog-agarwal-7455851b1/`}
                            link_mail={`mailto: f20190419@goa.bits-pilani.ac.in`}
                            link_github={`#`}
                            img={`"https://source.unsplash.com/random/300"`}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <TeamCard
                            name={`RATNAM PATEL`}
                            title={`MEDIA AND PR HEAD`}
                            link_linkedin={`https://www.linkedin.com/in/ratnam-patel-524790197/`}
                            link_mail={`mailto: f20190416@goa.bits-pilani.ac.in`}
                            link_github={`#`}
                            img={`"https://source.unsplash.com/random/300"`}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    </>
)

export default AboutPage

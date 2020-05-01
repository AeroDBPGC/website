import React from "react"

// For Bootstrap responsive layout.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles for Home page.
import homePageStyle from "../styles/home/home.module.scss"

// Custom components.
import Header from "../components/header"
import HomeAnimation from "../components/home/homeanimation"
import HomeLogo from "../components/home/homelogo"
import Footer from "../components/footer"

const IndexPage = () => (
  <>

    {/* Top Section of the Home page */}
    <div className={homePageStyle.topSection}>
      <Header />
      <Container fluid="true" className={homePageStyle.topContainer} >
        <HomeLogo />
        <HomeAnimation />
      </Container>
    </div>

    {/* Bottom Section of the home page */}
    <div className={homePageStyle.bottomSection}>
      <div className={homePageStyle.bottomContainer}>
        <Container className={homePageStyle.cardsWrapper}>
          <Row className={homePageStyle.row}>
            <Col className={homePageStyle.col} lg={8} md={6}>
              <div className={homePageStyle.card1}>
                <div>
                  <p className={homePageStyle.linkTitle}>ACTIVE</p>
                  <p className={homePageStyle.linkTitle}>PROJECTS→</p>
                </div>
              </div>
            </Col>
            <Col className={homePageStyle.col} lg={4} md={6}>
              <div className={homePageStyle.card2}>
                <div>
                  <p className={homePageStyle.linkTitle}>MEET</p>
                  <p className={homePageStyle.linkTitle}>THE TEAM→</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={homePageStyle.row}>
            <Col className={homePageStyle.col} lg={4} md={6}>
              <div className={homePageStyle.card3}>
                <div>
                  <p className={homePageStyle.linkTitle}>CHECK</p>
                  <p className={homePageStyle.linkTitle}>THE BLOG→</p>
                </div>
              </div>
            </Col>
            <Col className={homePageStyle.col} lg={8} md={6}>
              <div className={homePageStyle.card4}>
                <div>
                  <p className={homePageStyle.linkTitle}>FUND COOL</p>
                  <p className={homePageStyle.linkTitle}>PROJECTS→</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>

  </>
)

export default IndexPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
import TeamCardGitless from "../components/about/teamcard_gitless"
import Footer from "../components/footer"

// About page.
const AboutPage = () => {
    const data = useStaticQuery(graphql`
      query {
        teampic: file(relativePath: { eq: "teamPic1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pranjal: file(relativePath: { eq: "PranjalPrez.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bharat: file(relativePath: { eq: "dp1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rachit: file(relativePath: { eq: "RachitSubCo.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ratnam: file(relativePath: { eq: "ratnam.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sanjog: file(relativePath: { eq: "sanjog1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ishan: file(relativePath: { eq: "ishan.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
      <>
        <div className={aboutPageStyle.containerMain}>
          <Header siteTitle="ABOUT US" />
          <Container fluid="true">
            <Row>
              <Col>
                <TeamPicture img={data.teampic.childImageSharp.fluid} />
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
                <TeamCardGitless
                  name={`PRANJAL ANAND`}
                  title={`PRESIDENT`}
                  link_linkedin={`https://www.linkedin.com/in/pranjal-anand-8906631a5/`}
                  link_mail={`mailto: f20180874@goa.bits-pilani.ac.in`}
                  link_github={`#`}
                  img={data.pranjal.childImageSharp.fluid}
                />
              </Col>
              <Col xs={12} md={4}>
                <TeamCard
                  name={`BHARAT GUPTA`}
                  title={`CHIEF COORDINATOR`}
                  link_linkedin={`https://www.linkedin.com/in/bharat-gupta-a5540a178/`}
                  link_mail={`mailto: f20180446@goa.bits-pilani.ac.in`}
                  link_github={`https://github.com/bharat787`}
                  img={data.bharat.childImageSharp.fluid}
                />
              </Col>
              <Col xs={12} md={4}>
                <TeamCardGitless
                  name={`RACHIT GUPTA`}
                  title={`SUB COORDINATOR`}
                  link_linkedin={`https://www.linkedin.com/in/rachit-gupta-847039194/`}
                  link_mail={`mailto: f20190466@goa.bits-pilani.ac.in`}
                  link_github={`#`}
                  img={data.rachit.childImageSharp.fluid}
                />
              </Col>
              <Col xs={12} md={4}>
                <TeamCardGitless
                  name={`ISHAN NEOGI`}
                  title={`SUB COORDINATOR`}
                  link_linkedin={`https://www.linkedin.com/in/ishan-neogi-5794281a9/`}
                  link_mail={`mailto: f20190393@goa.bits-pilani.ac.in`}
                  link_github={`#`}
                  img={data.ishan.childImageSharp.fluid}
                />
              </Col>
              <Col xs={12} md={4}>
                <TeamCardGitless
                  name={`SANJOG AGARWAL`}
                  title={`INVENTORY HEAD`}
                  link_linkedin={`https://www.linkedin.com/in/sanjog-agarwal-7455851b1/`}
                  link_mail={`mailto: f20190419@goa.bits-pilani.ac.in`}
                  link_github={`#`}
                  img={data.sanjog.childImageSharp.fluid}
                />
              </Col>
              <Col xs={12} md={4}>
                <TeamCardGitless
                  name={`RATNAM PATEL`}
                  title={`MEDIA AND PR HEAD`}
                  link_linkedin={`https://www.linkedin.com/in/ratnam-patel-524790197/`}
                  link_mail={`mailto: f20190416@goa.bits-pilani.ac.in`}
                  link_github={`#`}
                  img={data.ratnam.childImageSharp.fluid}
                />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </>
    )}

export default AboutPage

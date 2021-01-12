import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// For Bootstrap responsive layout.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles for Projects page.
import projectsPageStyle from "../styles/projects/projects.module.scss"

// Custom components for Projects page.
import Header from "../components/header"
import ProjectCard from "../components/projects/projectcard"
import Footer from "../components/footer"

// Import project images
import GenMav from "../images/genmav.png"
import plane from "../images/Plane.png"
import Phoenix from "../images/phoenix.jpeg"
import STS from "../images/STS2.jpeg"

// Project page.
const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      genmav: file(relativePath: { eq: "genmav.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plane: file(relativePath: { eq: "Plane.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoenix: file(relativePath: { eq: "phoenix.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sts: file(relativePath: { eq: "STS2.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }      
    }
  `)
  return (<div className={projectsPageStyle.wrapper}>
    <Header siteTitle="PROJECTS THIS SEM" />
    <Container className={projectsPageStyle.container}>
      <Row>
        <Col>
          <ProjectCard title={"GENMAV"} description={"Contribute to an open source library from autonmous drone navigation."}
            img={GenMav} repoLink={"https://github.com/Aerodynamics-Club/GenMAV"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard title={"Project Phoenix"} description={"Design and build aircraft using CAD."}
            img={Phoenix} repoLink={"https://github.com/Aerodynamics-Club/Design"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard title={"Static Thrust Stand"} description={"Design a test bed to research and develop prototypes."} 
          img={STS} repoLink={"https://github.com/Aerodynamics-Club/Design"}/>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
)}

export default ProjectPage

import React from "react"

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

// Project page.
const ProjectPage = () => (
  <div className={projectsPageStyle.wrapper}>
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
          <ProjectCard title={"Design"} description={"Design and build aircrafts using CAD."}
            img={plane} repoLink={"https://github.com/Aerodynamics-Club/Design"} />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <ProjectCard title={"RC AIRPLANE"} description={"Fly like never before."} />
        </Col>
      </Row> */}
    </Container>
    <Footer />
  </div>
)

export default ProjectPage

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

// Project page.
const ProjectPage = () => (
  <div className={projectsPageStyle.wrapper}>
    <Header siteTitle="PROJECTS" />
    <Container className={projectsPageStyle.container}>
      <Row>
        <Col>
          <ProjectCard title={"GENMAV"} description={"Contribute to an open source library from autonmous drone navigation."} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard title={"CAD Design"} description={"Design and build aircrafts using CAD."} />
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

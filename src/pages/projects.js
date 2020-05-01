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

// Project page.
const ProjectPage = () => (
    <div className={projectsPageStyle.wrapper}>
        <Header siteTitle="PROJECTS" />
        <Container className={projectsPageStyle.container}>
            <Row>
                <Col>
                    <ProjectCard title={"PROJECT NAME"} description={"This is a brief description."} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectCard title={"FOREST DRONE"} description={"Best forest drone in town."} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectCard title={"RC AIRPLANE"} description={"Fly like never before."} />
                </Col>
            </Row>
        </Container>
    </div>
)

export default ProjectPage

import React from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import projectsPageStyle from "../styles/projects/projects.module.scss"

import Header from "../components/header"
import ProjectCard from "../components/projects/projectcard"

const ProjectPage = () => (
    <>
        <div className={projectsPageStyle.wrapper} style={{ justifyContent:`start` }}>
            <Header siteTitle="PROJECTS" />
            <Container className={projectsPageStyle.c1}>
                <Row>
                    <Col>
                        <ProjectCard></ProjectCard>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectCard></ProjectCard>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectCard></ProjectCard>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)

export default ProjectPage

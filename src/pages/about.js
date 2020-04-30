import React from "react"

import "../components/about.scss"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutCard from "../components/aboutcard"
import ProfileCard from "../components/profilecard"
import TeamCard from "../components/teamcard"

import Header from "../components/header"

import { FaRegDotCircle,FaDotCircle } from "react-icons/fa"
import { GoPrimitiveDot, GoDash } from "react-icons/go"

const ProjectPage = () => (
  <>
    <div className="wrapper">
        <Header siteTitle="ABOUT US" />
        <Container fluid="true" className="c2">
            <Row className="">
                <Col className="">
                    <AboutCard></AboutCard>
                </Col>
            </Row>
            <Container fluid="true">
            <h2 className="text-center mt-3" style={{ fontFamily:`'Raleway', sans-serif`, fontSize:`2rem`, display:`block` }}><GoDash style={{ marginRight:`1px`, position:`relative`, bottom:`3px` }}></GoDash>MEET OUR LEADERS<GoDash style={{ marginLeft:`1px`, position:`relative`, bottom:`3px` }}></GoDash></h2>
            <Row noGutters="true" className="mb-4">
                <Col xs={12} md={4} className="">
                    <ProfileCard></ProfileCard>
                </Col>
                <Col xs={12} md={4} className="">
                    <ProfileCard></ProfileCard>
                </Col>
                <Col xs={12} md={4} className="">
                    <ProfileCard></ProfileCard>
                </Col>
            </Row>
            <h2 className="text-center mt-3" style={{ fontFamily:`'Raleway', sans-serif`, fontSize:`2rem` }}><GoDash style={{ marginRight:`1px`, position:`relative`, bottom:`3px` }}></GoDash>MEET THE TEAM<GoDash style={{ marginLeft:`1px`, position:`relative`, bottom:`3px` }}></GoDash></h2>
            </Container>
            <Row noGutters="true" className="mb-4">
                <Col xs={12} md={4} className="">
                    <TeamCard></TeamCard>
                </Col>
                <Col xs={12} md={4} className="">
                    <TeamCard></TeamCard>
                </Col>
                <Col xs={12} md={4} className="">
                    <TeamCard></TeamCard>
                </Col>
            </Row>
        </Container>
    </div>
    </>
)

export default ProjectPage

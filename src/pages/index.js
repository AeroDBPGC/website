import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"


import logo from "../images/Logo.svg"
import cloud from "../images/Cloud.svg"

import "../components/index.scss"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/header"
import HomeAnimation from "../components/home/homeanimation"
import HomeLogo from "../components/home/homelogo"

const IndexPage = () => (
  <>
    <div className="wrapper1" style={{ width:"100vw" }}>
      <Header />
      <Container fluid="true" className="container2" >
          <HomeLogo />
          <HomeAnimation />
      </Container>
    </div>
    <div className="wrapper" style={{ justifyContent:`center` }}>
      <Container>
        <Row className="my-2">
          <Col className="mt-3 mt-md-0" lg={8} md={6}>
            <div className="card1" style={{ }}>
              <p style={{ fontFamily:`'Playfair Display', serif`, fontSize:`30px`, display:``, borderRadius:`3px`, paddingBottom:`0`, marginTop:`50px`, textShadow:`1px 1px 15px -2px black`, color:`#fff` }}></p>
            </div>
          </Col>
          <Col className="mt-4 mt-md-0" lg={4} md={6}>
            <div className="card2">
              <h2></h2>
            </div>
          </Col>
        </Row>
        <Row className="my-md-2 mt-md-4">
          <Col className="mt-3 mt-md-0" lg={4} md={6}>
            <div className="card3">
              <h2></h2>
            </div>
          </Col>
          <Col className="mt-4 mb-4 mb-md-0 mt-md-0" lg={8} md={6}>
            <div className="card4">
              <h2></h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)

export default IndexPage

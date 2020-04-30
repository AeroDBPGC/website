import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import navbarStyle from './header.module.scss'

import "./profilecard.scss"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProfileCard = () => (
    <div className="profilecard" style={{ margin:`1rem `}}>
        <Container fluid="true" className="" style={{ height:`inherit`, padding:`0`, margin:`0`, overflow:`hidden` }}>
            <Row noGutters="true"  style={{ height:`55%`, overflow:`hidden`, padding:`0`, margin:`0`  }}>
                <Col className="border" className="profileimg" style={{ width:`100%`, overflow:`hidden` }}>
                    <img className="profileimg" src="https://source.unsplash.com/random/500" style={{ width:`100%`, margin:`0px`, borderRadius:`15px` }}></img>
                </Col>
            </Row>
            <Row style={{ height:`45%`, paddingTop:`1rem`, borderTop:`5px solid #00adb5`, borderRadius:`15px` }}>
                <Col className="text-center">
                    <h3 style={{ color:`black`, marginBottom:`.75rem` }}>FIRSTNAME LASTNAME</h3>
                    <h5 className="text-muted" style={{ color:`black`, lineHeight:`1px`  }}>PRESIDENT</h5>
                </Col>
                
            </Row>
        </Container>
    </div>
)

export default ProfileCard

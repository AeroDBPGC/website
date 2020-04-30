import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import navbarStyle from './header.module.scss'
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

import "./teamcard.scss"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TeamCard = () => (
    <div className="teamcard" style={{ margin:`1rem`, overflow:`hidden`}}>
        <Container fluid="true" className="teamcard2" style={{ height:`inherit`, padding:`0`, margin:`0`, overflow:`hidden` }}>
            <p>VARUN BANKAR</p>
            <small>SUB CORDINATOR</small>
        </Container>
        <div className="text-center ho3" style={{ position:`absolute`, display:`block`, bottom:`32px`, marginLeft:`auto`, textAlign:`center`, width:`inherit` }}>
            <FaLinkedin className="h" style={{ fontSize:`2rem` }}></FaLinkedin>
            <FaFacebookSquare className="h" style={{ fontSize:`2rem`, marginLeft:`.25rem` }}></FaFacebookSquare>
        </div>
    </div>
)

export default TeamCard

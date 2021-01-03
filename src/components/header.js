import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import navbarStyle from '../styles/header.module.scss'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ siteTitle }) => (
  <>
    <Navbar expand="lg">
      <Navbar.Brand className={navbarStyle.navHeader}>{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={navbarStyle.navToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li"><Link className="nav-link" activeClassName="active" style={{fontSize: "1.1rem", fontWeight: "500"}} to="/">Home</Link></Nav.Item>
            <Nav.Item as="li"><Link className="nav-link" activeClassName="active" style={{fontSize: "1.1rem", fontWeight: "500"}} to="/projects">Projects</Link></Nav.Item>
            <Nav.Item as="li"><Link className="nav-link" activeClassName="active" style={{fontSize: "1.1rem", fontWeight: "500"}} to="/about">About</Link></Nav.Item>
            <Nav.Item as="li"><a className="nav-link" activeClassName="active" style={{fontSize: "1.1rem", fontWeight: "500"}} href="https://medium.com/@ic.aero">Blog</a></Nav.Item>
            <Nav.Item as="li"><Link className="nav-link" activeClassName="active" style={{fontSize: "1.1rem", fontWeight: "500"}} to="/contact">Contact</Link></Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

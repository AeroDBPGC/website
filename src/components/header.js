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
      <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ml-auto">
          <Nav.Link className="text-center"><Link className={navbarStyle.navLink} activeClassName={navbarStyle.activeLink} to="/">Home</Link></Nav.Link>
          <Nav.Link className="text-center"><Link className={navbarStyle.navLink} activeClassName={navbarStyle.activeLink} to="/projects">Projects</Link></Nav.Link>
          <Nav.Link className="text-center"><Link className={navbarStyle.navLink} activeClassName={navbarStyle.activeLink} to="/about">About</Link></Nav.Link>
          <Nav.Link className="text-center"><Link className={navbarStyle.navLink} activeClassName={navbarStyle.activeLink} to="/blog">Blog</Link></Nav.Link>
          <Nav.Link className="text-center"><Link className={navbarStyle.navLink} activeClassName={navbarStyle.activeLink} to="/contact">Contact</Link></Nav.Link>
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

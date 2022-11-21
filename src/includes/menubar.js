import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import packageIcon1 from '../images/packages/icon1.png';
import packageIcon2 from '../images/packages/icon2.png';
import packageIcon3 from '../images/packages/icon3.png';
import packageIcon4 from '../images/packages/icon4.png';
import packageIcon5 from '../images/packages/icon5.png';
import packageIcon6 from '../images/packages/icon6.png';
import packageIcon7 from '../images/packages/icon7.png';
import packageIcon8 from '../images/packages/icon8.png';
import packageIcon9 from '../images/packages/icon9.png';
import packageIcon10 from '../images/packages/icon10.png';
import packageIcon11 from '../images/packages/icon11.png';
import packageIcon12 from '../images/packages/icon12.png';
import packageIcon13 from '../images/packages/icon13.png';
import packageIcon14 from '../images/packages/icon14.png';
import packageIcon15 from '../images/packages/icon15.png';
import packageIcon16 from '../images/packages/icon16.png';
import packageIcon17 from '../images/packages/icon17.png';
import packageIcon18 from '../images/packages/icon18.png';
import packageIcon19 from '../images/packages/icon19.png';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class Menubar extends Component {
    
    render() {
        return (
            <section className="menu-bar">
                <Container className="p-0">
                    <Row className="g-0 align-items-center">
                        <Col>
                            <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                        <Nav.Link to="/" as={Link} >Home</Nav.Link>
                                        <NavDropdown title="About Us" renderMenuOnMount={true}>
                                            <NavDropdown.Item to="/about-us/" as={Link}>AG Diagnostics</NavDropdown.Item>
                                            <NavDropdown.Item to="/about-founder/" as={Link}>About Founder</NavDropdown.Item>
                                            <NavDropdown.Item to="/our-team/" as={Link}>Our Team</NavDropdown.Item>
                                            <NavDropdown.Item to="/awards/" as={Link}>Awards</NavDropdown.Item>
                                            <NavDropdown.Item to="/csr-policy/" as={Link}>CSR Policy</NavDropdown.Item>                                            
                                        </NavDropdown>
                                        <NavDropdown title="Packages" renderMenuOnMount={true} className="mega-menu">
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon1} alt="" />AG Care Basic</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon2} alt="" />AG Care Essential</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon3} alt="" />AG Care Essential Extended</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon4} alt="" />AG Care Master</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon5} alt="" />AG Care Madam</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon6} alt="" />AG Care Soulmate Individual</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon7} alt="" />AG Care Soulmate Couple</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon8} alt="" />AG Care Baby Plan (Male)</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon9} alt="" />AG Care Baby Plan (Female)</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon10} alt="" />AG Care for Cancer (Male)</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon11} alt="" />AG Care for Cancer (Female)</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon12} alt="" />AG Care Cheeni Kum (Mini)</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon13} alt="" />AG Care Cheeni Kum (Maxi)</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon14} alt="" />AG Care Dil Ki Dhadkan</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon15} alt="" />AG Care Holistic Package</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon16} alt="" />AG Care Master Comprehensive</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon17} alt="" />AG Care Master Comprehensive Advance</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon18} alt="" />AG Care Madam Comprehensive</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon19} alt="" />AG Care Madam Comprehensive Advance</NavDropdown.Item>
                                            <NavDropdown.Item to="/package-details/" as={Link}><img src={packageIcon14} alt="" />AG Care Dil Ki Dhadkan Advance</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link to="/home-visit/" as={Link} >Home Visit</Nav.Link>
                                        <Nav.Link to="/services/" as={Link} >Services</Nav.Link>
                                        <Nav.Link to="/specialities/" as={Link} >Specialities</Nav.Link>
                                        <Nav.Link to="/find-a-lab/" as={Link} >Find a Lab</Nav.Link>
                                        <Nav.Link to="/careers/" as={Link} >Careers</Nav.Link>
                                        <Nav.Link to="/contact-us/" as={Link} >Contact Us</Nav.Link>
                                        <Nav.Link to="/brochures/" as={Link} >Brochures</Nav.Link>
                                        <Nav.Link to="/" as={Link} ><FiDownload /> Download Report</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>           
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Menubar;
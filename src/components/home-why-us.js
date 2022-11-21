import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import award from '../images/award.png';
import destination from '../images/destination.png';
import microscope from '../images/microscope.png';
import nabl from '../images/nabl.png';
import scooter from '../images/scooter.png';

class HomeWhyUs extends Component {
    
    render() {
        return (
            <section className="why-us">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center">Why Us?</h2>
                            <h3 className="text-center">Why Should A.G Diagnostics Pvt. Ltd.<br/>
                                Be Your Preferred Healthcare Partner?</h3>
                            <ul>
                                <li>
                                    <div className="why-choose-icons">
                                        <img src={award} alt="" className="img-fluid" />
                                    </div>
                                    <div className="why-choose-text">
                                        <div className="inner-box">
                                            <p>50+ Collection Centres Across Pune</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-choose-icons">
                                        <img src={destination} alt="" className="img-fluid" />
                                    </div>
                                    <div className="why-choose-text">
                                        <div className="inner-box">
                                            <p>40 Years Trusted Legacy of Dr. Ajit Golwilkar</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-choose-icons">
                                        <img src={microscope} alt="" className="img-fluid" />
                                    </div>
                                    <div className="why-choose-text">
                                        <div className="inner-box">
                                            <p>State-Of-The-Art Pathology Laboratory & Diagnostic Centre Spread Across 16000 sq. ft</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-choose-icons">
                                        <img src={scooter} alt="" className="img-fluid" />
                                    </div>
                                    <div className="why-choose-text">
                                        <div className="inner-box">
                                            <p>Bringing Trust to Your Doorstep Through Home Visit Services</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-choose-icons">
                                        <img src={nabl} alt="" className="img-fluid" />
                                    </div>
                                    <div className="why-choose-text">
                                        <div className="inner-box">
                                            <p>NABL Accredited as per ISO-15189:2012</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default HomeWhyUs;
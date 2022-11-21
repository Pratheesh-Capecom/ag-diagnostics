import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage2 from '../images/about-2.jpg';

class AboutContent extends Component {

    render() {
        return (
            <>
            <section className="gray-bg-light">
                <Container>
                        <Row className="align-items-center justify-content-between flex-column-reverse flex-lg-row">
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h5 className="text-dark"><strong className="text-orange">A.G Diagnostics Pvt. Ltd.</strong> is a reputed, state-of-the-art clinical diagnostics laboratory, spread over <strong>16,000 sq.ft.</strong> processing centre at Bhandarkar Road, Pune having a network of over 50 collection centres across Pune region. </h5>
                            <p className="text-dark">A.G Diagnostics has invested in cutting-edge equipment that renders pathology services with utmost precision. Thus, A.G Diagnostics team always take a pride to become a Healthcare Partner with all our customers by offering them the full range of Pathology services, Home Collection Facility & Wellness services (located at main lab, Bhandarkar Road).</p>
                            <p className="text-dark">Currently, Dr. Awanti & Dr. Vinanti run this world class, highest quality standard diagnostic set-up of A.G Diagnostics Pvt. Ltd., which is backed up by a team of expert Pathologists, Microbiologists, skilled Phlebotomists and Technicians to deliver reliable & accurate diagnosis in shortest possible time.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="about-image">
                                <img src={aboutImage2} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>            
            </>
        );
    }
}

export default AboutContent;
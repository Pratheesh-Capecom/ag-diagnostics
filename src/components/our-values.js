import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OurValuesImg1 from '../images/our-values-image1.jpg';
import OurValuesImg2 from '../images/our-values-image2.jpg';
import OurValuesImg3 from '../images/our-values-image3.jpg';
import OurValuesImg4 from '../images/our-values-image4.jpg';
import OurValuesImg5 from '../images/our-values-image5.jpg';
import { FiArrowRightCircle } from 'react-icons/fi';

class OurValues extends Component {

    render() {
        return (
            <>
                <section className="bg-light-orange">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={8} className="mb-5">
                                <h2 className="text-center">Our Values</h2>
                                <h3 className="text-center">Our values guide us on a journey full of purpose &amp; perseverance</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="our-values">
                                    <img src={OurValuesImg1} alt="" className="img-fluid" />
                                    <div className="our-values-content">
                                        <h3 className="d-flex align-items-center justify-content-between">Trust & Transparency <FiArrowRightCircle className="text-orange" /></h3>
                                        <p>40 years of a trusted legacy has ensured that families spanning across four or more generations have chosen us. Our belief is that total transparency is the key to nurturing strong relationships with every patient. Place your trust in us and be assured of the transparency of our services always.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="our-values">
                                    <img src={OurValuesImg2} alt="" className="img-fluid" />
                                    <div className="our-values-content">
                                        <h3 className="d-flex align-items-center justify-content-between">Our People, Our Family <FiArrowRightCircle className="text-orange" /></h3>
                                        <p>Providing excellent services perpetually has helped us create bonds with people. Open lines of communication with our patients have helped these bonds strengthen and we consider those who choose our services our family. At A.G Diagnostics our staff is more family than employees therefore we pride ourselves on having a strong and healthy workspace.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="our-values">
                                    <img src={OurValuesImg3} alt="" className="img-fluid" />
                                    <div className="our-values-content">
                                        <h3 className="d-flex align-items-center justify-content-between">Learning & Innovation <FiArrowRightCircle className="text-orange" /></h3>
                                        <p>Learning and innovation is the key to success. Pathology is a science that is constantly growing and we ensure that we remain at the top of the game by being up-to-date.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="our-values">
                                    <img src={OurValuesImg4} alt="" className="img-fluid" />
                                    <div className="our-values-content">
                                        <h3 className="d-flex align-items-center justify-content-between">Customer Before Self <FiArrowRightCircle className="text-orange" /></h3>
                                        <p>We deeply value those who choose us and therefore our aim is to always put the customer before self. Our services have been founded on this very value.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="our-values">
                                    <img src={OurValuesImg5} alt="" className="img-fluid" />
                                    <div className="our-values-content">
                                        <h3 className="d-flex align-items-center justify-content-between">Excellence Is Our Pride <FiArrowRightCircle className="text-orange" /></h3>
                                        <p>We strive at providing quality work to those who seek our services. Excellence has and will always be a virtue we imbibe in our team and services. Delivering accurate results in the shortest time possible is our main objective at A.G Diagnostics. Ensuring that we get accurate results the first time, every time in the shortest possible time is our constant aim.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default OurValues;
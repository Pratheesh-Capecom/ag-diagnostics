import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../images/banner-img1.png';
import Banner2 from '../images/banner-img2.png';
import Banner3 from '../images/banner-img3.png';
import { Link } from 'react-router-dom';


class Homeslider extends Component {
    render() {
        return (
            <section className="home-slider-bg">                
                <Container>
                    <Row>
                        <Col>
                            <Carousel fade>
                                <Carousel.Item>
                                    <Row className="align-items-center flex-column-reverse flex-md-row flex-lg-row">
                                        <Col sm={12} md={6} lg={7}>
                                            <Carousel.Caption>
                                                <h3>40+ Year old legacy <span>in healthcare now brings excellence in</span> <strong>Di<span>ag</span>nostics</strong></h3>
                                                <Link to="/packages" className="orange-btn">View Packages</Link>
                                            </Carousel.Caption>
                                        </Col>
                                        <Col sm={12} md={6} lg={5}>
                                            <img className="d-block w-100" src={Banner1} alt="" />
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row className="align-items-center flex-column-reverse flex-md-row flex-lg-row">
                                        <Col sm={12} md={6} lg={7}>
                                            <Carousel.Caption>
                                                <h3>40+ Year old legacy <span>in healthcare now brings excellence in</span> <strong>Di<span>ag</span>nostics</strong></h3>
                                                <Link to="/packages" className="orange-btn">View Packages</Link>
                                            </Carousel.Caption>
                                        </Col>
                                        <Col sm={12} md={6} lg={5}>
                                            <img className="d-block w-100" src={Banner2} alt="" />
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row className="align-items-center flex-column-reverse flex-md-row flex-lg-row">
                                        <Col sm={12} md={6} lg={7}>
                                            <Carousel.Caption>
                                                <h3>40+ Year old legacy <span>in healthcare now brings excellence in</span> <strong>Di<span>ag</span>nostics</strong></h3>
                                                <Link to="/packages" className="orange-btn">View Packages</Link>
                                            </Carousel.Caption>
                                        </Col>
                                        <Col sm={12} md={6} lg={5}>
                                            <img className="d-block w-100" src={Banner3} alt="" />
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Homeslider;
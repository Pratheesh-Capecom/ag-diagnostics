import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../images/banners/banner-1.png';
import Banner2 from '../images/banners/banner-2.png';
import Banner3 from '../images/banners/banner-3.png';
import Banner4 from '../images/banners/banner-4.png';
import Banner1Mobile from '../images/banners/banner-1-mobile.png';
import Banner2Mobile from '../images/banners/banner-2-mobile.png';
import Banner3Mobile from '../images/banners/banner-3-mobile.png';
import Banner4Mobile from '../images/banners/banner-4-mobile.png';
import { Link } from 'react-router-dom';


class Homeslider extends Component {
    render() {
        return (
            <section className="home-slider-bg">                
                <Container>
                    <Row>
                        <Col>
                            <Carousel fade className="d-none d-lg-block d-md-block">
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner1} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner2} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner3} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner4} alt="" />
                                    </Link>
                                </Carousel.Item>
                            </Carousel>
                            <Carousel fade className="d-block d-lg-none d-md-none">
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner1Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner2Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner3Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner4Mobile} alt="" />
                                    </Link>
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
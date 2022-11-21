import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import expertiseImage1 from '../images/expertice1.png';
import expertiseImage2 from '../images/expertice2.png';
import expertiseImage3 from '../images/expertice3.png';
import expertiseImage4 from '../images/expertice4.png';
import { BsArrowRight } from 'react-icons/bs';

class expertiseScroll extends Component {

    componentDidMount() {
        AOS.init();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
        };
        return (
            <section className="gray-bg-light">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center">Our Expertise</h2>
                            <h3 className="text-center">Our State-Of-The-Art Facilities</h3>
                            <Slider {...settings} className="package-slides expertise">
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage1} alt="" />
                                            <div className="exper-txt">
                                                <h3>Hematology</h3>
                                                <p>These tests are for detecting and evaluating a variety infections.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage2} alt="" />
                                            <div className="exper-txt">
                                                <h3>Microbiology</h3>
                                                <p>Microbiological analysis helps with the  detection of unwanted microorganisms.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage3} alt="" />
                                            <div className="exper-txt">
                                                <h3>Clinical Pathology</h3>
                                                <p>Clinical Pathology is used to help diagnose diseases such as diabetes.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage4} alt="" />
                                            <div className="exper-txt">
                                                <h3>Clinical Biochemistry</h3>
                                                <p>These tests are useful for determining prognosis and guiding the therapy.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage1} alt="" />
                                            <div className="exper-txt">
                                                <h3>Hematology</h3>
                                                <p>These tests are for detecting and evaluating a variety infections.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage2} alt="" />
                                            <div className="exper-txt">
                                                <h3>Microbiology</h3>
                                                <p>Microbiological analysis helps with the  detection of unwanted microorganisms.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage3} alt="" />
                                            <div className="exper-txt">
                                                <h3>Clinical Pathology</h3>
                                                <p>Clinical Pathology is used to help diagnose diseases such as diabetes.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="expertise-txt">
                                        <div className="expertise_inner">
                                            <img src={expertiseImage4} alt="" />
                                            <div className="exper-txt">
                                                <h3>Clinical Biochemistry</h3>
                                                <p>These tests are useful for determining prognosis and guiding the therapy.</p>
                                                <a href="#" className="mr-2 readmore">Read More <BsArrowRight className="text-orange" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className="text-center">
                                <a href="#" className="purple-btn">View All Facilities</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default expertiseScroll;
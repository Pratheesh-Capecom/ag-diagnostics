import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import DummyUser from '../images/dummy-user.jpg';
import testimonialQuote from '../images/testimonial-quote.png';

class testimonials extends Component {

    componentDidMount() {
        AOS.init();
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            centerMode: true,
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
            <section className="bg-light-orange">
                <Container fluid>
                    <Row>
                        <Col>
                            <h2 className="text-center">Testimonials</h2>
                            <h3 className="text-center">What our patient’s are saying</h3>

                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10}>
                            <Slider {...settings} className="package-slides testimonials">
                                <div>
                                    <div className="testimonials-list">
                                        <p>"I have been testing with A.G Diagnostics Pvt. Ltd. for many years. It has been found that your reports are quite reliable and consistent. Your constant updates about technology, equipment, and infrastructure, from time to time, have helped us to make the best use of your services. Your NABL accreditation speaks of your quality consciousness"</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>AYISHA UMMER</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p>"It was a great experience at A.G Diagnostics Pvt. Ltd. Very much impressed at the enterance.Reception and other staff gave a good welcome. The lab is very clean and arrangements are excellent.Courtious staff is a big highlight and modern equipments and sterile environment. Keep it up in future also."</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Aishwarya Barvadekar</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p>"A.G Diagnostics Pvt. Ltd. is a well equipped facility for all types of diagnostic tests at Pune.Latest testing equipments and friendly staff with great emphasis on quality and hygiene."</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Ganesh Sanyal</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p>"It was a great experience at A.G Diagnostics Pvt. Ltd. Very much impressed at the enterance.Reception and other staff gave a good welcome. The lab is very clean and arrangements are excellent.Courtious staff is a big highlight and modern equipments and sterile environment. Keep it up in future also."</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>AYISHA UMMER</h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>                
            </section>
        );
    }
}

export default testimonials;
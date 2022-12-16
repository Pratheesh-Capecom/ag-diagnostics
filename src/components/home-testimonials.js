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
                breakpoint: 1090,
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
                            <h3 className="text-center">What Our Customers Say</h3>

                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10}>
                            <Slider {...settings} className="package-slides testimonials">
                                <div>
                                    <div className="testimonials-list">
                                        <p>Excellent support and assistance by the Customer Care person and Phlebotomist. Very polite, soft-spoken and everyone deserves 5 stars.​</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Prajakta Shiledar​</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p><strong>Namaste,</strong><br /><br />
                                            We received the lab reports on time. With loyal staff and disciplined technicians, AG Diagnostics is providing excellent lab services and the home sample collection service is beneficial for pregnant women and physically-challenged people. Thank you for your service!</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Dr Lochan Bendre Damale</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p>ए.जी डायग्नोस्टिक्स चा एकूणच अनुभव छान आहे. लॅबची स्वच्छता आणि कर्मचाऱ्यांची वागणूक छान आहे. सर्वच उत्तम नेहमीप्रमाणे!!​</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Anuja Jadhav</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p>Thank you, A.G Diagnostics! The front desk of Khadki collection centre is managed well by a customer care person and phlebotomist. They have been very helpful and prompt in giving good information and blood test related services. A deserving brand and staff indeed!​</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Hrishikesh Chithade</h3>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials-list">
                                        <p>I would like to share my first-hand experience about the timely advice given by sincere home visit representative of A.G Diagnostics who is giving us home visit service for 20 years.<br /><br />
                                        He has been of great help in collecting samples and providing excellent service to the patients during Covid also.
                                        ​</p>
                                        <div className="user-details">
                                            <img src={DummyUser} alt="" className="img-round" />
                                            <span className="quotes-icon">
                                                <img src={testimonialQuote} alt="" />
                                            </span>
                                            <h3>Shreeram Mone</h3>
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
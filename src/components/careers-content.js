import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import CareersImage from '../images/career-image.jpg';

class CareersContent extends Component {

    render() {


        return (
            <>
                <section>
                    <Container>
                        <Row>
                            <Col>
                                <div className="career-bg">
                                    <Row className="justify-content-end">
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            <img src={CareersImage} alt="" className="img-fluid d-block d-lg-none" />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            <div className="career-content">
                                                <h3 className="text-start mar-bot-30 fw-normal">Life @ <strong className="text-white">AG Diagnostics</strong></h3>
                                                <h5 className="text-white pb-0 fw-light">We’re inspiring a new way of working together. At AG Diagnostics, our vision is to advance scientific and clinical practice through training, research and development.</h5>
                                                <p className="pb-0">We recognise that our biggest asset is our people – behind each of our achievements lies the expertise, dedication and innovation of the individuals who work for us. This is why we ensure that those building their careers here are rewarded with access to a variety of learning and development opportunities across our modern and diverse businesses.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>                        
                    </Container>
                </section>   
                <section className="current-openings-cta">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={12} md={12} lg={7}>
                                <h3 className="text-start text-white fw-normal">Be a part of the tech company that’s a part of everything</h3>
                                <h5 className="text-white fw-normal mb-0">Ready to take the first step and embark on your journey to a rewarding new role with AG Diagnostics?</h5>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={5}>
                                <div className="current-openings-btn">
                                    <Link to="/current-openings/" className="orange-btn">
                                        View Current Openings &nbsp; <BsArrowRight />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>             
            </>
        );
    }
}

export default CareersContent;
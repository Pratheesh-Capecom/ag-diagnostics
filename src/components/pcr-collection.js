import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icmr from '../images/icmr.png';
import pcrcollection from '../images/home-pcr-collection.jpg';
import { Link } from 'react-router-dom';

class PcrCollection extends Component {

    render() {
        return (
            <section className="home-pcr-collection p-0">
                <Container>
                    <Row className="align-items-center g-0">
                        <Col xs={12} sm={12} md={10} lg={6} className="virus-bg">
                            <h3 className="pad-top-70 pad-bot-20 text-white text-start pe-5"><span className="text-orange">Covid 19 RT-PCR</span> Sample Collection at your Doorstep</h3>
                            <p className="text-white pe-5">Get your COVID-19 RT-PCR Test done without leaving your home. Our skilled phlebotomist will visit your home and collect the sample as per ICMR Guidelines.</p>
                            <p className="text-white pe-5">To ensure your safety as well as of our Phlebotomists, COVID-19 RT-PCR sample collection will be done only with a valid prescription from a physician.</p>
                            <Row className="align-items-center">
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Link to="/covid-pcr/" className="orange-btn hover-white mar-bot-30" >Book Your Slot Now</Link>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <img src={icmr} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <img src={pcrcollection} alt="" className="mar-top-20 img-fluid mb-3 d-sm-block d-block d-md-block d-lg-none w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default PcrCollection;
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import videoImage from '../images/video-image.jpg';
import video from '../images/home-video.mp4';
import { Link } from 'react-router-dom';

class homeWhoWeAre extends Component {

    render() {
        return (
            <section className="dna-bg">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h2>Who we are</h2>
                            <h3 className="text-start">Four Decades Of Diagnostic Excellence</h3>
                            <p>In the year 1978, a young doctor- Dr. Ajit Golwilkar, dreamt of bringing world class pathology services to the city of Pune & founded his pathology laboratory on Karve Road, called Golwilkar Laboratories. His name has been considered as synonymous with quality laboratory services in Pune & the country for four over decades now. To begin with, the samples used to test with the then available basic diagnostic techniques, none the less maintaining highest accuracy and reliability. His endeavour had been to deliver results in shortest possible time and yet at affordable cost.</p>
                            <Link to="/about-us/" className="purple-btn">Know More</Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="video-image">
                                <img src={videoImage} alt="" className="img-fluid" />
                                <a data-fancybox href={video}  id="play-video" className="video-play-button">
                                    <span></span>
                                </a>
                                <div className="exp">
                                    <h2>40+</h2>
                                    <p>Years of Excellence</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default homeWhoWeAre;
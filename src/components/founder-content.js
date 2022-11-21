import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage1 from '../images/about-1.png';

class FounderContent extends Component {

    render() {
        return (
            <>
                <section className="bg-light-orange">
                    <Container>
                        <Row className="justify-content-between">
                            <Col xs={12} sm={12} md={12} lg={5}>
                                <div className="about-image sticky-img">
                                    <img src={aboutImage1} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <h3 className="text-start mb-4">Our Inspiration</h3>
                                <h5 className="text-dark">Carrying Forward <strong className="text-orange">Dr.Ajit Golwilkar's</strong> Legacy of Over Four Decades</h5>
                                <p className="text-dark">In the year 1978, a young doctor- Dr. Ajit Golwilkar, dreamt of bringing world class pathology services to the city of Pune & founded his pathology laboratory on Karve Road, called Golwilkar Laboratories. His name has been considered as synonymous with quality laboratory services in Pune & the country for four over decades now.</p>
                                <p className="text-dark">To begin with, the samples used to test with the then available basic diagnostic techniques, none the less maintaining highest accuracy and reliability. His endeavour had been to deliver results in shortest possible time and yet at affordable cost.</p>
                                <p className="text-dark">There have been many firsts to the credit of Dr. Golwilkar, who provided automation and a diverse test facility through radioimmunoassay, other immunoassay techniques, immunophenotyping- immunohistochemistry & flowcytometry, molecular diagnostic techniques- polymerase chain reaction, automated microbiology techniques, quality system, accreditation, and laboratory information system (LIS).</p>
                                <p className="text-dark">Dr. Golwilkar had recognised the need for Home Visit services way back in 1978 & pioneered this concept in the city. He recognized that very ill patients, or patients who cannot move due to injuries, differently abled patients, pregnant ladies, senior citizens, patients who live far from his set up but trust his services only, need home service facilities. He himself started doing home visits for blood collection. He has personally trained & motivated many of our home visit phlebotomists.</p>
                                <p className="text-dark">Thus, Home visit services is a sine qua non feature of our laboratory. May it be rain or sunshine or a chilly winter morning, our expert home visit team members offer courteous & prompt services across the city.</p>
                                <p className="text-dark">Dr. Golwilkar had been serving the society across all sectors including many hospitals in Pune, teaching institutes and medical colleges, research institutes and social organizations. Thus, his name has been identical with ‘Trust’ for many families through three to four generations for their diagnostic needs.</p>
                                <p className="text-dark">His legacy is now ably carried forward by both his daughters - Dr. Awanti Golwilkar-Mehendale and Dr. Vinanti Golwilkar- Patankar. It can be said that pathology runs in their blood.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default FounderContent;
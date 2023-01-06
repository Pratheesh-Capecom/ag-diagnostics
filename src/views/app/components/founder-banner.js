import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FounderBanner = () => {
    return (
        <section className="inner-banner about-founder">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">About <b>Founder</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default FounderBanner;
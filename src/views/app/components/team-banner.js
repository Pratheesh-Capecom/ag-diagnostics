import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TeamBanner = () => {
    return (
        <section className="inner-banner team">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Our <b>Team</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TeamBanner;
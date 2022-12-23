import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TechnicalCapabilitiesBanner = () => {
    return (
        <section className="inner-banner specialities">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Technical Capabilities</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TechnicalCapabilitiesBanner;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const InnerBanner = () => {
    return (
        <section className="inner-banner">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">The Best Preventive<br />Health Packages <b>Got Even Better!</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default InnerBanner;
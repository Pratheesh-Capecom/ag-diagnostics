import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const PrivacyBanner = () => {
    return (
        <section className="inner-banner privacy-policy">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Privacy <b>Policy</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default PrivacyBanner;
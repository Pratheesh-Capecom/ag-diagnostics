import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FindALabBanner = () => {
    return (
        <section className="inner-banner find-a-lab">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Find a <b>Lab</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FindALabBanner;
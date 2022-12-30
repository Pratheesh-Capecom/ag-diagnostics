import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AwardsBanner = () => {
    return (
        <section className="inner-banner awards">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Awards</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AwardsBanner;
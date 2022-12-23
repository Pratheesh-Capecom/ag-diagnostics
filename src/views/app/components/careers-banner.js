import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CareersBanner = () => {
    return (
        <section className="inner-banner career">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Careers</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default CareersBanner;
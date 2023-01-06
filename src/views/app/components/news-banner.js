import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NewsBanner = () => {
    return (
        <section className="inner-banner news">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">News</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default NewsBanner;
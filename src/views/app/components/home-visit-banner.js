import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const HomeVisitBanner = () => {
    return (
        <section className="inner-banner home-visit">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Home <b>Visit</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default HomeVisitBanner;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MediaBanner = () => {
    return (
        <section className="inner-banner media">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Media</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default MediaBanner;
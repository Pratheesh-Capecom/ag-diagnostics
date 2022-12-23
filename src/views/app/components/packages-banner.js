import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const PackagesBanner = () => {
    return (
        <section className="inner-banner packages">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Packages</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default PackagesBanner;
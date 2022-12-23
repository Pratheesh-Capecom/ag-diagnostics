import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CsrBanner = () => {
    return (
        <section className="inner-banner csr-policy">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">CSR <b>Policy</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CsrBanner;
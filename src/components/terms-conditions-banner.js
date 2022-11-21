import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TermsConditionsBanner extends Component {

    render() {
        return (
            <section className="inner-banner terms-conditions">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h3 className="text-start text-white">Terms and <b>Conditions</b></h3>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TermsConditionsBanner;
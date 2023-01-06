import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PrivacyPolicyContent extends Component {

    render() {
        return (
            <>
                <section>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10}>
                                <h3 className="text-orange">We'll Update Soon!</h3>
                            </Col>
                        </Row>
                    </Container>
                </section>                
            </>
        );
    }
}

export default PrivacyPolicyContent;
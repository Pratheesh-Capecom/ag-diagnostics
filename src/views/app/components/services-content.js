import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const ServicesContent = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>SL #</th>
                                        <th>Test Code</th>
                                        <th>Test Name</th>
                                        <th>₹ Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Test Code 1</td>
                                        <td>Test Name 1</td>
                                        <td>₹ 1500</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Test Code 2</td>
                                        <td>Test Name 3</td>
                                        <td>₹ 3500</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Test Code 3</td>
                                        <td>Test Name 3</td>
                                        <td>₹ 7500</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ServicesContent;
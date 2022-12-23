import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from 'react-icons/fa';


const HomeVisitForm = () => {
    return (
        <section className="bg-light-orange" id="home-visit-form">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center">Fill out this below Form and</h2>
                        <h3 className="text-center">Get tested in the comfort of your home</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} xl={8}>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Select Package</p>
                                <Form.Select aria-label="select package">
                                    <option>-- Select Package --</option>
                                    <option value="1">Package One</option>
                                    <option value="2">Package Two</option>
                                    <option value="3">Package Three</option>
                                </Form.Select>
                                <p className="selected-package">
                                    Selected Package: <span><strong>Package One</strong>
                                        <strong className="text-orange">₹ 1500</strong></span>
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Search by Test Title</p>
                                <Form.Control type="text" placeholder="Search by Test Title" />
                                <p className="selected-package">
                                    Selected Test: <span><strong>Test One</strong>
                                        <strong className="text-orange">₹ 1500</strong></span>
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4 className="mb-3 mt-3 pb-0">Patient Details</h4>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">First Name</p>
                                <Form.Control type="text" placeholder="Enter Your First Name" />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Last Name</p>
                                <Form.Control type="text" placeholder="Enter Your Last Name" />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Email ID</p>
                                <Form.Control type="text" placeholder="Enter Your Email Address" />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 pb-2 text-dark">Gender</p>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Phone Number</p>
                                <Form.Control type="text" placeholder="Enter Your Phone Number" />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">DOB</p>
                                <Form.Control type="date" name="dob" />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} className="pb-4">
                                <p className="mb-0 text-dark">Address</p>
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h4 className="mb-3 mt-3 pb-0">Lab Date / Timing Details</h4>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Date</p>
                                <Form.Control type="date" name="dob" />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                <p className="mb-0 text-dark">Time</p>
                                <Form.Select aria-label="select time">
                                    <option>-- Select Time --</option>
                                    <option value="1">8:00am to 10:00am</option>
                                    <option value="2">10:00am to 12:00am</option>
                                    <option value="3">12:00pm to 2:00pm</option>
                                    <option value="3">2:00pm to 4:00pm</option>
                                    <option value="3">4:00pm to 6:00pm</option>
                                </Form.Select>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <p className="text-center">
                                    <Button className="btn1"><FaPaperPlane /> &nbsp; Book Home Visit</Button>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default HomeVisitForm;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrLocation } from 'react-icons/gr';
import { BiCategory, BiBookReader } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { SlBriefcase } from 'react-icons/sl';
import { HiOutlineGift } from 'react-icons/hi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from 'react-icons/fa';

const ApplyNowContent = () => {
    return (
        <section className="apply-now-form position-relative">
            <Container>
                <Row className="justify-content-around">
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Row className="align-items-center">
                            <Col xs={12} sm={12} md={12} lg={10}>
                                <h3 className="text-start">Sales Executive</h3>
                                <h4 className="pad-bot-20"><GrLocation /> Pune, Maharashtra</h4>
                                <div className="apply-now-icons">
                                    <BiCategory /> <strong>Department: </strong>Operations
                                </div>
                                <div className="apply-now-icons">
                                    <FaRegUser /> <strong>Key Relationship: </strong>Functional Heads, Doctors and other internal department.
                                </div>
                                <div className="apply-now-icons"><SlBriefcase /> <strong>Experience: </strong> 2 Years</div>
                                <div className="apply-now-icons"><BiBookReader /> <strong>Education: </strong> Any Degree</div>
                                <div className="apply-now-icons"><HiOutlineGift /> <strong>Job Purpose: </strong> This position’s main Role & Responsibility is to operate Radiology Department
                                    and conduct tests related to X-Ray/CT/MRI/OPG/MAMMO and maintenance of
                                    their respective Department.</div>
                                <h5 className="text-dark mb-0 fw-bold">Key Responsibilities</h5>
                                <p className="text-dark">Responsibility at various levels within the department is as follows :</p>
                                <ul className="list-style1">
                                    <li>Fastest TAT possible for every patient.</li>
                                    <li>Reporting TAT (Within 2 hours)</li>
                                    <li>Maintain Suraksha Quality in tests and procedures</li>
                                    <li>Maintain Suraksha Standard of service. Preparing the patient for Test/
                                        Explaining the procedure in brief</li>
                                    <li>Ensure Departmental housekeeping and maintenance is as per
                                        Suraksha Standards.</li>
                                    <li>Ensure readiness of the department for tests</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="apply-now-form-bg">
                            <h4 className="text-purple pad-bot-20">Please fill the form below!</h4>
                            <Form.Control type="text" placeholder="Name" className="mar-bot-20" />
                            <Form.Control type="tel" minlength="10" maxlength="10" placeholder="Phone Number" className="mar-bot-20" />
                            <Form.Control type="email" placeholder="Email ID" className="mar-bot-20" />
                            <Form.Control type="text" placeholder="Country" className="mar-bot-20" />
                            <Form.Control type="text" placeholder="Address" className="mar-bot-20" />
                            <Form.Control as="textarea" rows={3} placeholder="Cover Letter" className="mar-bot-20" />
                            <p className="mt-4 mb-0 text-dark">Upload CV</p>
                            <Form.Control type="file" placeholder="Upload File" />
                            <p className="text-center pad-top-20">
                                <Button className="btn1 mb-0"><FaPaperPlane /> &nbsp; SUBMIT</Button>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default ApplyNowContent;
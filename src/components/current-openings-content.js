import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SlBriefcase } from 'react-icons/sl';
import { BiCategory } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from 'react-icons/fa';

class CurrentOpeningsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClassActive: false,
        };
    }

    toggleClass = () => {
        this.setState({
            isClassActive:
                !this.state.isClassActive
        });
    }

    render() {


        return (
            <>
                
                <section className="bg-light-orange">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Consultant Pathologist<span><GrLocation /> Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> MD Pathology
                                    </div>
                                    <div className="experience">
                                        <FaRegUser /> 1 Post
                                    </div>
                                    <div className="experience"><SlBriefcase /> &nbsp; </div>
                                    <Button onClick={this.toggleClass} className="orange-btn">Apply Now &nbsp; <BsArrowRightCircle /></Button>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Technicians for Night Shift<span><GrLocation /> Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> HSC, BSc and/or MSc​
                                    </div>
                                    <div className="experience">
                                        <FaRegUser /> 2 Posts
                                    </div>
                                    <div className="experience"><SlBriefcase /> 3 - 4 years of experience working on semi or fully automated machines.</div>
                                    <Button onClick={this.toggleClass} className="orange-btn">Apply Now &nbsp; <BsArrowRightCircle /></Button>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Sales Executive/ Managers<span><GrLocation /> Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> &nbsp;
                                    </div>
                                    <div className="experience">
                                        <FaRegUser />  &nbsp;
                                    </div>
                                    <div className="experience"><SlBriefcase /> 2+ years of experience </div>
                                    <Button onClick={this.toggleClass} className="orange-btn">Apply Now &nbsp; <BsArrowRightCircle /></Button>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Collection Centre Manager<span><GrLocation /> Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> Science Graduate
                                    </div>
                                    <div className="experience">
                                        <FaRegUser />  &nbsp;
                                    </div>
                                    <div className="experience"><SlBriefcase /> 5 years of experience in relevant field and possessing own vehicle.</div>
                                    <Button onClick={this.toggleClass} className="orange-btn">Apply Now &nbsp; <BsArrowRightCircle /></Button>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Phlebotomists<span><GrLocation /> Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> HSC/ DMLT or BSc/DMLT
                                    </div>
                                    <div className="experience">
                                        <FaRegUser />  &nbsp;
                                    </div>
                                    <div className="experience"><SlBriefcase /> Experience of use of vacutainer, able to draw blood of babies, must have own vehicle. </div>
                                    <Button onClick={this.toggleClass} className="orange-btn">Apply Now &nbsp; <BsArrowRightCircle /></Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={this.state.isClassActive ?
                    'package-details-form active' : 'package-details-form'}>
                    <Container>
                        <Row>
                            <Col>
                                <button onClick={this.toggleClass} className="btn-close"><GrClose /></button>
                                <h3 className="text-purple text-start mar-bot-20">Apply Now!</h3>
                                <Form.Control type="text" placeholder="Consultant Pathologist" className="mar-bot-20" disabled />
                                <Form.Control type="text" placeholder="Name" className="mar-bot-20" />
                                <Form.Control type="tel" minlength="10" maxlength="10" placeholder="Phone Number" className="mar-bot-20" />
                                <Form.Control type="email" placeholder="Email ID" className="mar-bot-20" />
                                <Form.Control type="text" placeholder="Location" className="mar-bot-20" />
                                <Form.Control type="text" placeholder="Total Experience" className="mar-bot-20" />
                                <Form.Control as="textarea" rows={3} placeholder="Cover Letter" className="mar-bot-20" />
                                <Form.Control type="file" accept=".doc,.docx,.pdf" />
                                <small>Only (.doc, .docx, .pdf) accepted</small>
                                <p className="text-center pad-top-20">
                                    <Button className="btn1 mb-0"><FaPaperPlane /> &nbsp; SUBMIT</Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default CurrentOpeningsContent;
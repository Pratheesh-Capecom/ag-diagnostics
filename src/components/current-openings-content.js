import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SlBriefcase } from 'react-icons/sl';
import { BiCategory } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';


class CurrentOpeningsContent extends Component {

    render() {


        return (
            <>
                
                <section className="bg-light-orange">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Sales Executive<span><GrLocation /> Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> Operations
                                    </div>
                                    <div className="experience">
                                        <FaRegUser /> Functional Heads, Doctors and other internal department.
                                    </div>
                                    <div className="experience"><SlBriefcase /> 2 Years</div>
                                    <Link to="/apply-now/" className="orange-btn">
                                        View Details &nbsp; <BsArrowRightCircle />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <div className="package-slide">
                                    <h5 className="text-purple">Sales Executive<span><GrLocation /> PCMC, Pune, Maharashtra</span></h5>
                                    <div className="experience">
                                        <BiCategory /> Operations
                                    </div>
                                    <div className="experience">
                                        <FaRegUser /> Functional Heads, Doctors and other internal department.
                                    </div>
                                    <div className="experience"><SlBriefcase /> 2 Years</div>
                                    <Link to="/apply-now/" className="orange-btn">
                                        View Details &nbsp; <BsArrowRightCircle />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default CurrentOpeningsContent;
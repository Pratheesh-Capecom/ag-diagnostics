import React, { useState, useEffect } from "react";
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
import { useJobEdit } from "hooks/currentOpening";

const ApplyNowContent = () => {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("job_id");

    const [applyData, setApplyData] = useState([])
    const { data: jobList } = useJobEdit(id)
    console.log(applyData)

    useEffect(() => {
        if (jobList) {
            setApplyData(jobList?.job)
        }
    }, [jobList]);

    return (
        <section className="apply-now-form position-relative">
            <Container>
                <Row className="justify-content-around">
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Row className="align-items-center">
                            <Col xs={12} sm={12} md={12} lg={10}>
                                <h3 className="text-start">{applyData?.job_title}</h3>
                                <h4 className="pad-bot-20"><GrLocation /> {applyData?.city} , {applyData?.state}</h4>
                                <div className="apply-now-icons">
                                    <BiCategory /> <strong>Department: </strong>{applyData?.department_name}
                                </div>
                                <div className="apply-now-icons">
                                    <FaRegUser /> <strong>Key Relationship: </strong>{applyData?.null || "-"}
                                </div>
                                <div className="apply-now-icons"><SlBriefcase /> <strong>Experience: </strong> {applyData?.experience}</div>
                                <div className="apply-now-icons"><BiBookReader /> <strong>Education: </strong> {applyData?.education}</div>
                                <div className="apply-now-icons"><HiOutlineGift /> <strong>Job Purpose: </strong> {applyData?.job_purpose}</div>
                                <h5 className="text-dark mb-0 fw-bold">Key Responsibilities</h5>
                                <p className="text-dark">Responsibility at various levels within the department is as follows :</p>
                                <ul className="list-style1">
                                    <li>{applyData?.responsibilities}</li>
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
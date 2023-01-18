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
import { useJobEdit, useApplyNow } from "hooks/currentOpening";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const ApplyNowContent = () => {

    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("job_id");

    const [applyData, setApplyData] = useState([])
    const { data: jobList } = useJobEdit(id)

    useEffect(() => {
        if (jobList) {
            setApplyData(jobList?.job)
        }
    }, [jobList]);


    const { mutate: apply, isLoading: applyloading } = useApplyNow();

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append("file", e.file[0])
        formData.append("job_id", id)
        formData.append("name", e.name)
        formData.append("email", e.email)
        formData.append("phone", e.phone)
        formData.append("cover_letter", e.cover_letter)
        formData.append("location", e.location)
        formData.append("address", e.address)
        apply(formData, {
            onSuccess: (item) => {
                if (item?.Status === 200) {
                    message.success(item?.Message)
                    reset();
                    history.push("/thank-you-career")
                }
                else {
                    message.error(item?.Message)
                    reset();
                }
            },
            onError: (error) => {
                console.log(error)
            }
        });
    }

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
                            <form onSubmit={handleSubmit(submitHandler)} className="contact-form">
                                <Form.Control type="text" {...register("job_id")} value={id} hidden={true} className="mar-bot-20" disabled />
                                <Form.Control type="text" {...register("name", { required: true })} placeholder="Name" className="mar-bot-20" />
                                {errors.name && <span>This field is required</span>}
                                <Form.Control type="tel" {...register("phone", { required: true })} minlength="10" maxlength="10" placeholder="Phone Number" className="mar-bot-20" />
                                {errors.phone && <span>This field is required</span>}
                                <Form.Control type="email" {...register("email", { required: true })} placeholder="Email ID" className="mar-bot-20" />
                                {errors.email && <span>This field is required</span>}
                                <Form.Control type="text" {...register("location", { required: true })} placeholder="Location" className="mar-bot-20" />
                                {errors.location && <span>This field is required</span>}
                                <Form.Control type="text" {...register("address", { required: true })} placeholder="Address" className="mar-bot-20" />
                                {errors.address && <span>This field is required</span>}
                                <Form.Control as="textarea" {...register("cover_letter", { required: true })} rows={3} placeholder="Cover Letter" className="mar-bot-20" />
                                {errors.cover_letter && <span>This field is required</span>}
                                <Form.Control type="file" {...register("file", { required: true })} accept=".doc,.docx,.pdf" />
                                {errors.file ? null : <small>Only (.doc, .docx, .pdf) accepted</small>}<br></br>
                                <small><br></br>{errors.name && <span>This field is required</span>}</small>
                                <p className="text-center pad-top-20">
                                    {applyloading ? <Button className="btn1 mb-0" disabled><FaPaperPlane /> &nbsp; SUBMIT</Button> :
                                        <Button className="btn1 mb-0" type="submit"><FaPaperPlane /> &nbsp; SUBMIT</Button>}
                                </p>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default ApplyNowContent;
import React, { useState, useEffect } from "react";
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
import { useForm } from "react-hook-form";
import { useCurrentOpenings } from "hooks/currentOpening";
import { message } from "antd";
import { useApplyNow } from "hooks/currentOpening";
import Loader from "./loader";
import { useHistory } from "react-router-dom";

const CurrentOpeningsContent = () => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isEnabled, setIsEnabled] = useState(false);
    const [singleData, setSingleData] = useState("");

    const toggleSwitch = (values) => {
        setSingleData(values)
        localStorage.setItem("apply_id", values.id)
        setIsEnabled(previousState => !previousState);
        reset();
    }

    const { data: openings, isLoading: loading } = useCurrentOpenings();
    const [openingsData, setOpeningsData] = useState([]);

    const { mutate: apply, isLoading: applyloading } = useApplyNow();

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append("file", e.file[0])
        formData.append("job_id", localStorage.getItem("apply_id"))
        formData.append("name", e.name)
        formData.append("email", e.email)
        formData.append("phone", e.phone)
        formData.append("cover_letter", e.cover_letter)
        formData.append("location", e.location)
        formData.append("total_experience", e.total_experience)
        apply(formData, {
            onSuccess: (item) => {
                if (item?.Status === 200) {
                    message.success(item?.Message)
                    reset();
                    history.push("/thank-you-career")
                    setIsEnabled(previousState => !previousState);
                }
                else {
                    message.error(item?.Message)
                    reset();
                    setIsEnabled(previousState => !previousState);
                }
            },
            onError: (error) => {
                console.log(error)
            }
        });
    }

    useEffect(() => {
        if (openings) {
            setOpeningsData(openings?.currentOpening)
        }
    }, [openings]);

    useEffect(() => {
        if (isEnabled === false) {
            localStorage.removeItem("apply_id")
        }
    }, [isEnabled]);

    return (
        <>
            <section className="bg-light-orange">
                <Container>
                    {loading ? <div className="common-loading"><Loader /></div> : openingsData === undefined || openingsData === null || openingsData?.length === 0 ? (
                        <div className="common-loading">
                            <h3 className="no-data">No Data Found</h3>
                        </div>
                    ) : (
                        <Row className={openingsData === undefined || openingsData === null || openingsData?.length === 0 ? 'current-pack' : null}>
                            <>
                                {openingsData?.map((common, a) => (
                                    <Col xs={12} sm={12} md={6} lg={6} xl={4} key={a}>
                                        <div className="package-slide" >
                                            <h5 className="text-purple">{common?.job_title}<span><GrLocation />
                                                &nbsp; {common?.city || "-"},{common?.state || "-"}
                                            </span></h5>
                                            <div className="experience">
                                                <BiCategory />{common?.department_name}
                                            </div>
                                            <div className="experience">
                                                <FaRegUser /> 1 Post
                                            </div>
                                            <div className="experience"><SlBriefcase /> &nbsp;{common?.experience} </div>
                                            <Button onClick={() => toggleSwitch(common)} className="orange-btn">Apply Now &nbsp; <BsArrowRightCircle /></Button>
                                        </div>
                                    </Col>
                                ))}
                            </>
                        </Row>)}
                </Container>
            </section>
            <section className={isEnabled ? 'package-details-form active' : 'package-details-form'}>
                <Container>
                    <Row>
                        <Col>
                            <button onClick={toggleSwitch} className="btn-close"><GrClose /></button>
                            <h3 className="text-purple text-start mar-bot-20">Apply Now!</h3>
                            <form onSubmit={handleSubmit(submitHandler)} className="contact-form">
                                <Form.Control type="text" value={singleData?.job_title} className="mar-bot-20" disabled />
                                <Form.Control type="text" {...register("job_id")} value={singleData?.id} hidden={true} className="mar-bot-20" disabled />
                                <Form.Control type="text" {...register("name", { required: true })} placeholder="Name" className="mar-bot-20" />
                                {errors.name && <span>This field is required</span>}
                                <Form.Control type="tel" {...register("phone", { required: true })} minlength="10" maxlength="10" placeholder="Phone Number" className="mar-bot-20" />
                                {errors.phone && <span>This field is required</span>}
                                <Form.Control type="email" {...register("email", { required: true })} placeholder="Email ID" className="mar-bot-20" />
                                {errors.email && <span>This field is required</span>}
                                <Form.Control type="text" {...register("location", { required: true })} placeholder="Location" className="mar-bot-20" />
                                {errors.location && <span>This field is required</span>}
                                <Form.Control type="text" {...register("total_experience", { required: true })} placeholder="Total Experience" className="mar-bot-20" />
                                {errors.total_experience && <span>This field is required</span>}
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
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}


export default CurrentOpeningsContent;
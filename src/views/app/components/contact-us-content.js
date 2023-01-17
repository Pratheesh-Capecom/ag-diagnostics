import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { message } from "antd";
import { GrLocation } from 'react-icons/gr';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContact } from "hooks/contact";


const ContactUsContent = () => {

    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { mutate: contact, isLoading: loading } = useContact()

    const submitHandler = (e) => {
        contact(e, {
            onSuccess: (item) => {
                if (item?.Status === 200) {
                    message.success(item?.Message)
                    history.push("/thank-you-contact")
                    reset();
                }
                else {
                    message.success(item?.Message)
                    reset();
                }
            },
            onError: (error) => {
                console.log(error)
            }
        });
    }

    return (
        <>
            <section className="apply-now-form position-relative">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <Row className="align-items-center">
                                <Col xs={12} sm={12} md={12} lg={10}>
                                    <div className="Contact-text"><GrLocation />
                                        <h4>A.G Diagnostics Pvt. Ltd.</h4>
                                        Nayantara, Bhandarkar Road, Pune 411004
                                    </div>
                                    <div className="Contact-text">
                                        <FiPhoneCall />
                                        <h4>Phone</h4>
                                        020 6763 6763
                                    </div>
                                    <div className="Contact-text fill-color border-bottom-0">
                                        <BsEnvelopeOpen />
                                        <h4>Email</h4>
                                        <Link to="mailto:info@agdiagnostics.com" className="text-dark" target="_blank" rel="noopener noreferrer" >info@agdiagnostics.com</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <div className="apply-now-form-bg">
                                <h3 className="text-start text-purple pb-0">Drop us a message!</h3>
                                <h5>We'd love to hear from you, please drop us a line if you've any query.</h5>
                                <form onSubmit={handleSubmit(submitHandler)} className="contact-form">
                                    <Form.Control type="text" {...register("name", { required: true })} placeholder="Name" className="mar-bot-20" />
                                    {errors.name && <span>This field is required</span>}
                                    <Form.Control type="tel" {...register("phone", { required: true })} minlength="10" maxlength="10" placeholder="Phone Number" className="mar-bot-20" />
                                    {errors.phone && <span>This field is required</span>}
                                    <Form.Control type="email" {...register("email", { required: true })} placeholder="Email ID" className="mar-bot-20" />
                                    {errors.email && <span>This field is required</span>}
                                    <Form.Control as="textarea" {...register("message", { required: true })} rows={3} placeholder="Message" className="mar-bot-20" />
                                    {errors.message && <span>This field is required</span>}
                                    <p className="text-center mb-0">
                                        {loading ? <Button className="btn1 mb-0" disabled><FaPaperPlane /> SUBMIT</Button> :
                                            <Button className="btn1 mb-0" type="submit" ><FaPaperPlane /> SUBMIT</Button>}
                                    </p>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <iframe title="Google Map" className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15133.025260485281!2d73.83457351231577!3d18.51731585702543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c16843c28799c5!2sA.G%20Diagnostics%20-%20Main%20Centre!5e0!3m2!1sen!2sin!4v1666937115493!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
}


export default ContactUsContent;
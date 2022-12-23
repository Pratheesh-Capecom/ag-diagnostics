import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { TbMap2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IoMdRefresh } from 'react-icons/io';


const FindALabContent = () => {
    return (
        <>
            <section className="bg-purple pad-top-20 pb-0">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={12} sm={12} md={6} lg={6} xl={5} className="pad-bot-20">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-nowrap text-white">Filter by: &nbsp;</span>
                                <Form.Select aria-label="select package" className="border-0">
                                    <option>-- Select Location --</option>
                                    <option value="1">Pune</option>
                                    <option value="2">Ahmednagar</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="pad-bot-20">
                            <Form.Control type="text" className="border-0" placeholder="Search by Lab Title / Nearby" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-light-orange pt-0">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">"Nayantara"<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Opp. TVS showroom, Bhandarkar Road, Pune - 411 004
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 7.30 AM to 8.00 PM
                                    <br /><strong>Sunday:</strong> 8.30 AM to 1.30PM</div>
                                <div className="phone">
                                    <FiPhoneCall /> 020- 6763 6763
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Ashok Nagar<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Office No. 1, Plot No.18, Ashok Sankul - 1, Rangehills Road, Ashoknagar, Pune - 411 007
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 7.30 AM to 7.30 PM
                                    <br /><strong>Sunday:</strong> Closed</div>
                                <div className="phone">
                                    <FiPhoneCall /> 77966 40321
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Aundh<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Shop No.1, Darpan Apartments, Opp. Bank of Maharashtra, D P Road, Sanghavi Nagar, Aundh, Pune - 411 007
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 7.30 AM to 7.30 PM
                                    <br /><strong>Sunday:</strong> 08.00 AM to 11.00 AM</div>
                                <div className="phone">
                                    <FiPhoneCall /> 77966 40310
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Baner<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Ananya Clinic, Mont Vert Zenith, Flat No 101, 1st Floor, Opp. Kundan Garden, Baner,  Pune - 411 045
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 8.00 AM to 7.30 PM
                                    <br /><strong>Sunday:</strong> Closed</div>
                                <div className="phone">
                                    <FiPhoneCall /> 77966 40314
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Bhandarkar Road - 2<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Flat No. 3, 852/1, Dinkar Baug Apts., 1st Floor, Bhandarkar Road, Pune - 411 004
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 7.00 AM to 7.30 PM
                                    <br /><strong>Sunday:</strong> Closed</div>
                                <div className="phone">
                                    <FiPhoneCall /> 020-6763 6763
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Ahmednagar<span>Ahmednagar, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Prabhakunj, Professor Colony Road, Sawedi, Ahmednagar - 414 003
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 8.00 AM to 7.00 PM
                                    <br /><strong>Sunday:</strong> Closed</div>
                                <div className="phone">
                                    <FiPhoneCall /> 0241-2421289 / 95
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Baner-Vitalife<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Vitalife Clinic, Srushti Elegance, Nr. Jupiter Hosp. Baner, Pune - 411 045
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 8.00 AM to 7.00 PM
                                    <br /><strong>Sunday:</strong> 08.00 AM to 11.00 AM</div>
                                <div className="phone">
                                    <FiPhoneCall /> 77966 40313
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Bhandarkar Road - 3<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Survey No 775/76, Ankur B Bulding, Off Bhandarkar Road, Near Kamla Nehru Park, Pune - 411 004
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 8.00 AM to 7.00 PM
                                    <br /><strong>Sunday:</strong> Closed</div>
                                <div className="phone">
                                    <FiPhoneCall /> 020-6763 6752
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide">
                                <h5 className="text-purple">Chinchwad-Shahunagar<span>Pune, Maharashtra</span></h5>
                                <div className="location">
                                    <GrLocation /> Flat No. 001, Shrinivas Apartments, GP 106, G Block, Mahabali Chowk, Shahunagar, Chinchwad, Pune - 411 019
                                </div>
                                <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> 7.30 AM to 7.30 PM
                                    <br /><strong>Sunday:</strong> Closed</div>
                                <div className="phone">
                                    <FiPhoneCall /> 86259 12952
                                </div>
                                <Link to="/" className="orange-btn">
                                    <TbMap2 /> Get Direction
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <p className="text-center">
                                <Button className="btn1"><IoMdRefresh /> &nbsp; Load More</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}


export default FindALabContent;
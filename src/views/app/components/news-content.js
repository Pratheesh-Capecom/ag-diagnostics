import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileSearch } from 'react-icons/ai';

const NewsContent = () => {
    return (
        <>
            <section className="bg-purple pad-top-20 pb-0">
                <Container>
                    <Row className="justify-content-end">
                        <Col xs={12} sm={6} md={4} lg={4} xl={3} className="pad-bot-20">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-nowrap text-white">Year: &nbsp;</span>
                                <Form.Select aria-label="select package" className="border-0">
                                    <option>- Select Year -</option>
                                    <option value="1">2022</option>
                                    <option value="2">2021</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={5} lg={4} xl={3} className="pad-bot-20">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-nowrap text-white">Month : &nbsp;</span>
                                <Form.Select aria-label="select package" className="border-0">
                                    <option>- Select Month -</option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="jun">June</option>
                                    <option value="jul">July</option>
                                    <option value="aug">August</option>
                                    <option value="sep">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} xl={2} className="pad-bot-20">
                            <Button className="orange-btn hover-white border-0 mt-0 mb-0 w-100"><AiOutlineFileSearch /> Search</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-light-orange">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide small-size news-content">
                                <Link to="/news-details" className="booklet-download">
                                    <div className="date"><strong>20</strong> Sep 2022</div>
                                    <h3>AG Diagnostics invites Franchisees for its network of collection centers across Pune</h3>
                                    <p>People residing in Pune urban, suburban and rural areas are welcome to send applications to become AG Diagnostics franchisees.</p>
                                    <span><HiArrowNarrowRight /></span>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide small-size news-content">
                                <Link to="/news-details" className="booklet-download">
                                    <div className="date"><strong>02</strong> Oct 2022</div>
                                    <h3>New Centre Launch at Pune</h3>
                                    <p>AG Diagnostics is a largest Superspeciality diagnostic chain now extends to Medinipur with the opening of its pathological lab in Tamluk. On this occasion, Chairman of Tamluk Municipality, Mr. Rabindranath Sen, and Vice Chairman of Tamluk Municipality, Mr. Dipendra Narayan Roy, were present for ribbon cutting ceremony.</p>
                                    <span><HiArrowNarrowRight /></span>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide small-size news-content">
                                <Link to="/news-details" className="booklet-download">
                                    <div className="date"><strong>15</strong> Oct 2022</div>
                                    <h3>AG Diagnostics has achieved Award for the Best Quality in Service Delivery</h3>
                                    <p>AG Diagnostics is a largest Superspeciality diagnostic chain now extends to Medinipur with the opening of its pathological lab in Tamluk. On this occasion, Chairman of Tamluk Municipality, Mr. Rabindranath Sen, and Vice Chairman of Tamluk Municipality, Mr. Dipendra Narayan Roy, were present for ribbon cutting ceremony.</p>
                                    <span><HiArrowNarrowRight /></span>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <div className="package-slide small-size news-content">
                                <Link to="/news-details" className="booklet-download">
                                    <div className="date"><strong>27</strong> Oct 2022</div>
                                    <h3>New Centre Launch at Pune</h3>
                                    <p>AG Diagnostics is a largest Superspeciality diagnostic chain now extends to Medinipur with the opening of its pathological lab in Tamluk. On this occasion, Chairman of Tamluk Municipality, Mr. Rabindranath Sen, and Vice Chairman of Tamluk Municipality, Mr. Dipendra Narayan Roy, were present for ribbon cutting ceremony.</p>
                                    <span><HiArrowNarrowRight /></span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default NewsContent;
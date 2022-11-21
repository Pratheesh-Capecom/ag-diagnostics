import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PackagesBooket from '../images/packages-booklet-image1.jpg';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import Pdf from '../images/diagnostics.pdf';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class PackagesBookletContent extends Component {

    render() {
        return (
            <section className="bg-light-orange">
                <Container>
                    <Row>
                        <Col>
                            <Tabs
                                defaultActiveKey="package-booklets">
                                <Tab eventKey="package-booklets" title="Package Booklets">
                                    <Row className="justify-content-center">
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="technical-leaflets" title="Technical Leaflets">
                                    <Row className="justify-content-center">
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                            <div className="package-slide">
                                                <Link to={Pdf} target="_blank" className="booklet-download">
                                                    <img src={PackagesBooket} alt="" className="img-fluid" />
                                                    <span><FiDownload /></span>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>                    
                </Container>
            </section>
        );
    }
}

export default PackagesBookletContent;
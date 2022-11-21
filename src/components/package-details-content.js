import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PackageDetailsIcon from '../images/package-details-icon.png';
import SampleTube from '../images/sample-tube.png';
import Calendar from '../images/calendar.png';
import SampleType from '../images/sample-type.png';
import AgeIcon from '../images/age.png';
import HomeCollections from '../images/home-collections.png';
import TestRequirement from '../images/testrequirement.png';
import Report from '../images/report.png';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from 'react-icons/fa';

class PackageDetails extends Component {

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
                <section className="package-details position-relative">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={8}>
                                <Row className="align-items-center">
                                    <Col xs={12} sm={12} md={12} lg={10}>
                                        <div className="package-details-heading">
                                            <img src={PackageDetailsIcon} alt="" className="img-fluid" />
                                            <h3>AG-CARE ESSENTIAL EXTENDED</h3>
                                        </div>
                                        <h4>Test information</h4>
                                        <div className="pckge_include">
                                            <img src={SampleTube} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Total tests included</h5>
                                                <p>Hemogram, Blood Sugar (Fasting), Lipid Profile (Maxi), Liver Function Test, BUN, Creatinine, Uric Acid, 	FT3 FT4 TSH, Vitamin B12, Vitamin B12, 25 OH Vitamin D &amp; Urine Routine.</p>
                                            </div>
                                        </div>
                                        <div className="pckge_include">
                                            <img src={Calendar} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Test Schedule</h5>
                                                <p>Daily</p>
                                            </div>
                                        </div>
                                        <div className="pckge_include">
                                            <img src={SampleType} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Sample type</h5>
                                                <p>Blood &amp; Urine</p>
                                            </div>
                                        </div>
                                        <div className="pckge_include">
                                            <img src={AgeIcon} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Age restrictions</h5>
                                                <p>None</p>
                                            </div>
                                        </div>
                                        <div className="pckge_include">
                                            <img src={HomeCollections} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Home collection</h5>
                                                <p>This test is elegible for home collection</p>
                                            </div>
                                        </div>
                                        <h4>Information for patients</h4>
                                        <div className="pckge_include">
                                            <img src={TestRequirement} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Pre-test requirements</h5>
                                                <ul className="list-style1">
                                                    <li className="ms-0">Ideally 10-12 hrs fasting required (Min. 8-10 hrs fasting).</li>
                                                    <li className="ms-0">Provide medication & clinical details.</li>
                                                    <li className="ms-0">Intake of caloric food, coffee/tea/milk or, diet soda/gum strictly not allowed during fasting period.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="pckge_include">
                                            <img src={Report} alt="" className="img-fluid" />
                                            <div className="pckge_details">
                                                <h5>Report availability</h5>
                                                <p>Daily (Mon to Sat) :18:30 hrs with same day reporting.*</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <div className="pckge_price_details text-center">
                                    <h5>&#8377;6620/-</h5>
                                    <h3>&#8377;4750/-</h3>
                                    <button onClick={this.toggleClass} className="btn1 d-block w-100">Enquire Now</button>
                                    <Link to="/home-visit#home-visit-form" className="btn2 d-block">Book Home Collection</Link>
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
                                <h3 className="text-purple text-start mar-bot-20">Enquire Now!</h3>
                                <Form.Control type="text" placeholder="AG-CARE Essential Extended" className="mar-bot-20" disabled />
                                <Form.Control type="text" placeholder="Name" className="mar-bot-20" />
                                <Form.Control type="tel" minlength="10" maxlength="10" placeholder="Phone Number" className="mar-bot-20" />
                                <Form.Control type="email" placeholder="Email ID" className="mar-bot-20" />
                                <Form.Control as="textarea" rows={3} placeholder="Message" className="mar-bot-20" />
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

export default PackageDetails;
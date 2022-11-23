import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Microbiology from '../images/microbiology.jpg';
import ClinicalPathology from '../images/clinical-pathology.jpg';
import QualityControl from '../images/quality-control.jpg';


class TechnicalCapabilitiesContent extends Component {

    render() {
        return (
            <>
                <section>
                    <Container>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={6}>
                                <h4 className="mb-2 pb-3">Microbiology & Molecular Biology</h4>
                                <h5 className="text-dark">In Microbiology, excellent quality controls ensure the best quality cultures with accurate organism identification & susceptibility testing with timely reports aided by state-of-the-art equipment and software. </h5>
                                <p className="text-dark">Molecular diagnostics works for several infectious and non-infectious parameters ensuring timely reports with proven sensitivity and specificity for important tests such as SARS-CoV-2, Influenza Panel, quantitative tests like HIV1, HBV, HCV, CMV viral load ensuring valuable information for treatment and prognosis. Preventive applications exist for HPV, Carba-R etc., whereas microassays facilitate syndromic approach for investigating respiratory, gastro-intestinal, meningoencephalitis & blood borne infections, and drug resistance parameters. </p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={5}>
                                <div className="about-image">
                                    <img src={Microbiology} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={5}>
                                <div className="about-image">
                                    <img src={ClinicalPathology} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6}>
                                <h4 className="mb-2 pb-3">Clinical Pathology</h4>
                                <h5 className="text-dark">Clinical Pathology includes examination of urine, stool, semen, body fluids etc. These seemingly simple tests are very important for diagnosing routine & rare disease states & also monitoring patients’ program.</h5>
                                <p className="text-dark">The department is equipped with automated urine and semen analyser which eliminates human errors. The team of pathologists supervises all tests in the department, thus ensuring reliable results.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={6}>
                                <h4 className="mb-2 pb-3">Quality Assurance Department</h4>
                                <h5 className="text-dark">A.G Diagnostics Pvt. Ltd. is committed to getting every test right the first time, every time and in shortest time. To ensure this, the laboratory follows stringent quality control procedures & participates in multiple proficiency testing programs.</h5>
                                <p className="text-dark">Standardized test methods and processes are in use in all departments of the laboratory and the lab also takes regular feedback from all its users. This feedback is used to drive continual improvement. The laboratory uses quality indicators and sigma metrics to monitor the quality improvement program.</p>
                                <h5><strong className="text-purple">A.G Diagnostics is accredited by NABL as per ISO 15189:2012.</strong></h5>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={5}>
                                <div className="about-image">
                                    <img src={QualityControl} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default TechnicalCapabilitiesContent;
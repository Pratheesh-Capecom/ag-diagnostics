import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AwantiGolwilkar from '../images/awanti-golwilkar.jpg';
import DummyDoctor from '../images/dummy-doctor.jpg';
import VinantiGolwilkar from '../images/vinanti-golwilkar.jpg';
import ManishaPatwardhan from '../images/manisha-patwardhan.jpg';
import MadhuwantiAbhyankar from '../images/madhuwanti-abhyankar.jpg';
import VenkateshKeralapurkar from '../images/venkatesh-keralapurkar.jpg';
import BhavanaJadhav from '../images/bhavana-jadhav.jpg';
import NeetiJalnapurkar from '../images/neeti-jalnapurkar.jpg';
import GirishSolanke from '../images/girish-solanke.jpg';
import MilindMirashi from '../images/milind-mirashi.jpg';
import VaishaliGokhale from '../images/vaishali-gokhale.jpg';
import ParagRatnakar from '../images/parag-ratnakar.jpg';
import ShantanuRoy from '../images/shantanu-roy.jpg';

class TeamContent extends Component {

    render() {
        return (
            <>
                <section className="bg-light-orange">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10}>
                                <h5 className="text-dark text-center">We take great pride in the efficiency and ethics practised by our technical team with over 20 years of collective experience. The technical team not only uses technology but practically lives technology. Their knowledge of technology used and the constant thirst to adapt to new, innovative practises helps us remain at the top of our game.</h5>
                                <p className="text-dark text-center">Each of them is heading the various departments and are responsible for operational excellence within the department and delivery of accurate reports in the shortest possible time.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="gray-bg-light teams">
                    <Container>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Awanti Golwilkar - <small className="text-purple">Mehendale</small></h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Awanti is a postgraduate in Pathology from the prestigious B.J. Medical College in Pune. She has been working with her father Dr. Ajit Golwilkar since 2004.</h5>
                                <p className="text-dark">Since then, she has carried forward his legacy excellently. It is said that Pathology runs in her blood and this fact is amply proved by her expertise in the field. Histopathology and Immunology is her forte. She will be instrumental in setting the company’s direction through strategic planning and implementation of the Golwilkar culture through the practice of highest ethical values. She is a dynamic and bold leader always providing all opportunities to the team, to develop and contribute towards the company. </p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={AwantiGolwilkar} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={VinantiGolwilkar} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Vinanti Golwilkar - <small className="text-purple">Patankar</small></h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Vinanti Golwilkar-Patankar has had a highly meritorious career throughout her school and medical education. She chose to follow the footsteps of her father and elder sister and completed MD Pathology from the prestigious B.J. Medical College, Pune in 2011.</h5>
                                <p className="text-dark">Armed with experience from the world-renowned Tata Memorial Hospital, Mumbai, she returned to 'her hometown to join her father’s laboratory and has been a pillar of strength for her father and sister. She has been the driving force behind developing new assays and introducing new tests and technologies ever since. Her special interest is in the field of Hematopathology and Molecular Diagnostics.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Manisha Patwardhan</h4>
                                <h6 className="mb-4">MD <small>(Path)</small>, DPB</h6>
                                <h5 className="text-dark">Dr.Manisha S. Patwardhan is an alumnus of the Seth G.S. Medical College & KEM Hospital, Mumbai. She has worked with the organisation since April 1996.</h5>
                                <p className="text-dark">She has driven excellence in technical operations through numerous process flow improvements. Autoimmunity, Endocrinology & Allergy testing are her special interests. She is working in the field of Quality Management System & Accreditation in Clinical Laboratories since 2003 & is a NABL assessor.  She is at the forefront of the teaching and training activities of the laboratory, and at state and national conferences.</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={ManishaPatwardhan} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={MadhuwantiAbhyankar} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Madhuwanti Abhyankar</h4>
                                <h6 className="mb-4">MD <small>(Micro)</small></h6>
                                <h5 className="text-dark">Dr. Madhuwanti. N. Abhyankar is a microbiologist of great repute. She has done her MD Microbiology from B.J. Medical College, Pune. Her expertise in Microbiology, Mycobacteriology, Mycology and Molecular Diagnostics is unmatched in the city of Pune.</h5>
                                <p className="text-dark">She is a pioneer in establishing the PCR technique in a private laboratory set-up in Pune city. She is a lead assessor with the NABL and is highly respected in that sphere. Under her leadership, the Microbiology and Molecular Diagnostics department at A.G Diagnostics is at par with international standards.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Venkatesh Keralapurkar</h4>
                                <h6 className="mb-4">DNB <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Venkatesh Keralapurkar is a postgraduate in Pathology from KEM hospital Pune. He has an experience of over 20 years in Pathology and Diagnostics, particularly with respect to handling the day-to- day work of a large busy laboratory. </h5>
                                <p className="text-dark">He is considered as the pillar of the Biochemistry and Immunoassay Departments and is an expert in patient consultations and handling patient queries. He has handled Quality and Accreditation in his previous association which has added to the quality of his repertoire.</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={VenkateshKeralapurkar} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={BhavanaJadhav} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Bhavana Jadhav</h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Bhavana Jadhav is a postgraduate from the B.J. Medical College Pune and has a fellowship from the Tata Medical Centre, Kolkata under her belt. She has been interested in Hematology from her postgraduate days.</h5>
                                <p className="text-dark">She has built an excellent reputation in the field with her work experience of more than 15 years. She has a meticulous approach towards each patient or case and has spoken on various forums on the topics of Immunohematology, Coagulation and Hemoglobinopathies.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Neeti Jalnapurkar</h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Neeti has completed her MBBS and MD Pathology from M.S. University, Vadodara, Gujarat. Histopathology and Cytopathology are her areas of interest and expertise.</h5>
                                <p className="text-dark">With an experience of around 24 years, Dr. Neeti has crafted an excellent reputation in the field of pathology for herself. Her effortless rapport with patients, dedication to her work and high standards of ethics and principles has made her shine brilliantly in her profession.</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={NeetiJalnapurkar} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={MilindMirashi} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Milind Mirashi</h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Mirashi has done his MD from B.J Medical College, Pune. With over 32 years of an astute experience, he is an asset to company.</h5>
                                <p className="text-dark">He has expertise in handling interpretation of numerous pathology findings with a special interest in Histopathology. </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Ashok Bhandare</h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Ratnakar has done his MD from Mumbai University. His 17+ years’ experience is backed-up with a strong academic record and excellent communication skills.</h5>
                                <p className="text-dark">With his proactive & motivated team player ability, he is also instrumental in handling Hospital Lab Management in our labs across India. He is actively engaged in managing multiple aspects of routine Lab operations &amp; outsourced laboratory platform management.</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={ParagRatnakar} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={DummyDoctor} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Parag Ratnakar</h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark"></h5>
                                <p className="text-dark"></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Girish Solanke</h4>
                                <h6 className="mb-4">MD <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Solanke has completed MD Pathology from Kasturba Medical College, Manipal University, Karnataka.</h5>
                                <p className="text-dark">He holds a strong experience of 7+ years in handling all aspects of routine pathology reporting with a special interest in Hematology and Coagulation. Dr. Solanke is a disciplined, effective team player with his analytical and communicative skills.</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={GirishSolanke} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={ShantanuRoy} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Shantanu Roy</h4>
                                <h6 className="mb-4">DCP, DNB <small>(Path)</small></h6>
                                <h5 className="text-dark">Dr. Roy has done his DCP from GMC, Aurangabad and passed DNB from Jehangir Hospital, Pune.</h5>
                                <p className="text-dark">His potential experience of over 2 years is an advantage for A.G Diagnostics to oversee the end-to-end management of associated hospital labs. Dr. Roy is very much proficient in handling routine reporting at main laboratory.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="divider">&nbsp;</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row flex-lg-row">                            
                            <Col xs={12} sm={12} md={8} lg={7}>
                                <h4 className="mb-2 pb-0">Dr. Vaishali Gokhale</h4>
                                <h6 className="mb-4">MD, DNB <small>(Microbiology)</small></h6>
                                <h5 className="text-dark">Dr. Gokhale has done her MD in Microbiology from B.J Govt Medical College, Pune and pursued DNB from National Board Examination, New Delhi.</h5>
                                <p className="text-dark">Dr. Gokhale holds experience of 6+ years in the field of Microbiology. She has keen interest in Molecular Microbiology, Mycology and Virology. She has done research work in Syphilis-Reverse Algorithm, Bacterial Meningitis and HIV in ANC females. She has presented her dissertation work at ID week 2018 at San Francisco for which she had been awarded scholarship by JHU.</p>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="about-image">
                                    <img src={VaishaliGokhale} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default TeamContent;
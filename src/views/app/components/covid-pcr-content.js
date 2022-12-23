import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import packageIcon1 from "assets/images/packages/icon1.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";



const CovidPcrContent = () => {
  return (
    <>
      <section className="gray-bg-light">
        <Container>
          <Row>
            <Col>
              <h3 className="text-start">
                We Assure Precise Diagnosis, Monitoring and Validation! Know
                More About COVID-19
              </h3>
              <p>
                COVID-19 is viral infection caused by novel corona virus, now
                called Severe Acute Respiratory. Syndrome Coronavirus-2
                (SARS-CoV-2). On March 11, 2020, the WHO declared COVID-19 as
                a global pandemic, which has taken a significant toll on
                people across the world.
              </p>
              <h4 className="text-purple pad-top-20 pad-bot-20">
                To help fight this pandemic, A.G Diagnostics offers:
              </h4>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>COVID-19 RT PCR</Accordion.Header>
                  <Accordion.Body>
                    <h5 className="text-dark">
                      Diagnostic test to identify acute/active COVID-19
                      infection.
                    </h5>
                    <div className="ques">
                      When should you get a COVID-19 RT PCR Test?
                    </div>
                    <div className="answ">
                      If you have symptoms of COVID-19 or if you have been
                      exposed to/ in contact with someone who has tested
                      positive for COVID-19.
                    </div>
                    <div className="ques">
                      How does a COVID-19 RT PCR test work?
                    </div>
                    <div className="answ">
                      Sample collection is done using a swab to collect
                      respiratory material from oropharyngeal and
                      nasopharyngeal area. A swab contains a soft tip on a
                      long, flexible stick that is inserted into your nose/
                      throat. After collection, the swab is sealed in a tube
                      and then sent to a laboratory.
                      <br />
                      <br />
                      The test can detect very small amounts of virus material
                      thus, it is the most accurate and reliable test to
                      detect acute infection in the body.
                    </div>
                    <div className="ques">What do Test Results signify?</div>
                    <div className="answ border-bottom-0">
                      A positive test result means that you have COVID-19
                      infection. If your test is positive, talk with your
                      healthcare provider and get the right treatment, stay
                      home, and isolate yourself from others.
                      <br />
                      <br />A negative test result means you most probably do
                      not have COVID-19 infection at the time you took your
                      test. If your test is negative, continue to take steps
                      to follow COVID safe behaviour like wearing mask, social
                      distancing, and hand sanitisation.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    COVID-19 Monitoring Panels
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5 className="text-dark">
                      To monitor severity of infection while getting treated
                      for COVID-19 & to identify people in need of care
                      escalation.
                    </h5>
                    <div className="ques">
                      Why COVID -19 Monitoring tests are important?
                    </div>
                    <div className="answ">
                      If you are COVID-19 Positive, you need to check your
                      well-being. At the early stage of COVID-19, CRP & IL-6
                      levels correlate with severity of lung lesions. Also,
                      patients may be at high risk for increased D-Dimer
                      associated with formation intravascular blood clots and
                      other associated complications. Thus, while treating
                      yourself for COVID -19, it is also necessary to monitor
                      & follow-up comprehensive investigations to understand
                      the disease severity.
                    </div>
                    <div className="ques">
                      Which tests are crucial for COVID -19 Monitoring?{" "}
                    </div>
                    <div className="answ border-bottom-0">
                      A.G.Diagnostics offers COVID-19 Monitoring Packages:
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    SARS-CoV-2 IgG Antibody Test
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5 className="text-dark">
                      To determine COVID-19 infection in the recent past – for
                      Serosurveillance purpose.
                    </h5>
                    <div className="ques">
                      Who should be tested for SARS-Cov-2 IgG Antibody Test?
                    </div>
                    <div className="answ">
                      Individuals who think they may have had COVID-19
                      asymptomatic or with just mild symptoms.
                    </div>
                    <div className="ques">
                      How does a SAR-Cov-2 IgG Antibody test work?
                    </div>
                    <div className="answ">
                      Antibody test determines if you have had a COVID-19
                      infection in the past – for Serosurveillance purpose
                      only.{" "}
                    </div>
                    <div className="ques">
                      Is RT-PCR and Antibody Test different?
                    </div>
                    <div className="answ border-bottom-0">
                      Yes. COVID RT-PCR swab test is for specific diagnosis of
                      current active SARS CoV-2 infection whereas, Antibody
                      tests should not be used to diagnose a current
                      infection.
                      <br />
                      <br />A positive test result for COVID-19 RT PCR test
                      means it is very likely you have COVID-19 infection.{" "}
                      <br />
                      <br />A positive Antibody test means that you were
                      likely infected in the past and have developed immune
                      response.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Anti-SARS-CoV-2 Spike Protein (S1/S2) IgG Test
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5 className="text-dark">
                      To determine quantitative antibody response post
                      vaccination (for all types of vaccines). To be done
                      after 2 weeks after the 2nd dose.
                    </h5>
                    <div className="ques">
                      Why Anti-SARS-CoV-2 Spike Protein (S1/S2) IgG Test is
                      done?
                    </div>
                    <div className="answ">
                      For quantitative determination of SARS-CoV-2 IgG
                      antibodies against S1/S2 spike protein.
                      <br />
                      <br />
                      Assay provides indication of presence of neutralising
                      IgG antibodies against SARS-CoV-2, thus of protective
                      immunity.
                      <br />
                      <br />
                      Helpful to detect post vaccination immune response to
                      all types of COVID-19 vaccine.
                    </div>
                    <div className="ques">
                      When should you schedule the test?
                    </div>
                    <div className="answ border-bottom-0">
                      SARS-CoV-2 IgG Antibodies usually appear after 2-3 weeks
                      of injection or 2 weeks post second dose of vaccination.
                      Thus, it is suggested to do the test after 2 weeks of
                      the 2nd dose of COVID Vaccine.
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-orange">
        <Container>
          <Row>
            <Col>
              <h3 className="text-start">COVID-19 Monitoring Packages</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="package-slide">
                <div className="icon-img">
                  <img src={packageIcon1} alt="" />
                </div>
                <h3 className="pb-0">COVID-19 BASIC PACKAGE</h3>
                <h6 className="mar-bot-20 fw-normal">
                  CBC (Complete Blood Count), D-Dimer, CRP (hs), Ferritin and
                  LDH
                </h6>
                <div className="pckge_price mar-bot-20 pad-top-20">
                  Special Price: ₹2299/- &nbsp; <span>MRP: ₹2980/-</span>
                </div>
                <Link to="/package-details" className="orange-btn">
                  Book Now <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="package-slide">
                <div className="icon-img">
                  <img src={packageIcon1} alt="" />
                </div>
                <h3 className="pb-0">COVID-19 EXTENDED PACKAGE</h3>
                <h6 className="mar-bot-20 fw-normal">
                  CBC (Complete Blood Count), D-Dimer, CRP (hs), Ferritin, LDH
                  and Interleukin - 6 (IL-6)
                </h6>
                <div className="pckge_price mar-bot-20">
                  Special Price: ₹4800/- &nbsp; <span>MRP: ₹6180/-</span>
                </div>
                <Link to="/package-details" className="orange-btn">
                  Book Now <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="package-slide">
                <div className="icon-img">
                  <img src={packageIcon1} alt="" />
                </div>
                <h3 className="pb-0">COVID-19 ADVANCED PACKAGE</h3>
                <h6 className="mar-bot-20 fw-normal">
                  CBC (Complete Blood Count), D-Dimer, CRP (hs), Ferritin,
                  LDH, Interleukin - 6 (IL-6), Trop-I, CPK and Procalcitonin
                </h6>
                <div className="pckge_price mar-bot-20">
                  Special Price: ₹8250/- &nbsp; <span>MRP: ₹10750/-</span>
                </div>
                <Link to="/package-details" className="orange-btn">
                  Book Now <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="text-center pad-top-30">
                <Link to="/find-a-lab" className="btn1">
                  View Covid 19 Test Centers <BsArrowRightShort />
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}


export default CovidPcrContent;

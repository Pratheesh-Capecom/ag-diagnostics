import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CareersImage from "assets/images/career-image.jpg";


const CareersContent = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="career-bg">
                <Row className="justify-content-end">
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <img src={CareersImage} alt="Careers - A G Diagnostics" className="img-fluid d-block d-lg-none" />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="career-content">
                      <h3 className="text-start mar-bot-30 fw-normal">
                        Life @ <strong className="text-white">A.G Diagnostics</strong>
                      </h3>
                      <h5 className="text-white pb-0 fw-light">
                        At A.G Diagnostics, we recognise that our biggest asset is our people, and they are more like a family than employees! Behind each of our achievements, there is indeed dedication, expertise and innovation of every individual who work for us. Therefore, we ensure that those building their careers at A.G Diagnostics, are rewarded with access to a variety of learning, research and development opportunities across our diverse services.</h5>
                      <p className="pb-0">A healthy workplace naturally increases employee engagement and when an employee is engaged, there is higher productivity rate, greater loyalty, better retention rates, and enhanced customer experiences. Thus, we always strive and inspire to build a healthy workplace.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="current-openings-cta">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={7}>
              <h3 className="text-start text-white fw-normal">Ready to take the first step and embark on the journey to a rewarding role?</h3>
              <h5 className="text-white fw-normal mb-0">Join A.G Diagnostics Pvt. Ltd.! You’ll fit right in!</h5>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="current-openings-btn">
                <Link to="/current-openings" className="orange-btn">
                  View Current Openings &nbsp; <BsArrowRight />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}


export default CareersContent;

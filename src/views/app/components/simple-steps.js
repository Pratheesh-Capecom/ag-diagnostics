import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import step1 from "assets/images/step1.png";
import stepimage1 from "assets/images/step-img1.jpg";
import step2 from "assets/images/step2.png";
import stepimage2 from "assets/images/step-img2.jpg";
import step3 from "assets/images/step3.png";
import stepimage3 from "assets/images/step-img3.jpg";
import { Link } from "react-router-dom";

const SimpleSteps = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={10} lg={8}>
            <h2 className="text-center">Home Sample Collection</h2>
            <h3 className="text-center">
              3 Simple Steps to get a Lab Test Done from the Comfort of Your
              Home
            </h3>
          </Col>
        </Row>
        <div className="bg-dot">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="img-div text-center f-text-sm-left">
                <div className="sm-center-img">
                  <img
                    src={step1}
                    className="number-img animate-lef-rig"
                    alt=""
                  />
                  <img src={stepimage2} className="img-round" alt="" />
                </div>
              </div>
              <div className="text-div text-center">
                <h3>Book Online</h3>
                <p>
                  Book your home sample collection test online by filling and
                  submitting the form
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="img-div text-center order-sm-1 d-sm-block d-block d-md-none">
                <div className="center-img">
                  <img
                    src={step2}
                    className="number-img animate-top-bot"
                    alt=""
                  />
                  <img src={stepimage1} className="img-round" alt="" />
                </div>
              </div>
              <div className="text-div text-center pad-top-70">
                <h3>Collection of the Sample</h3>
                <p>
                  Our Phlebotomist will visit your home to collect the sample
                  at your preferred slot time.
                </p>
              </div>
              <div className="img-div text-center order-sm-2 d-none d-md-block">
                <div className="sm-center-img">
                  <img
                    src={step2}
                    className="number-img animate-top-bot"
                    alt=""
                  />
                  <img src={stepimage1} className="img-round" alt="" />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="img-div text-center">
                <div className="sm-center-img">
                  <img
                    src={step3}
                    className="number-img animate-rotate"
                    alt=""
                  />
                  <img src={stepimage3} className="img-round" alt="" />
                </div>
              </div>
              <div className="text-div text-center">
                <h3>Fast &amp; Accurate Reports</h3>
                <p>
                  You can view or download your reports online at any time.{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="text-center">
                <Link to="/home-visit" className="purple-btn">
                  Book Your Test Now
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}


export default SimpleSteps;

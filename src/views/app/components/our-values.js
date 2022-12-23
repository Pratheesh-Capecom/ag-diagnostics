import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurValuesImg1 from "assets/images/our-values-image1.jpg";
import OurValuesImg2 from "assets/images/our-values-image2.jpg";
import OurValuesImg3 from "assets/images/our-values-image3.jpg";
import OurValuesImg4 from "assets/images/our-values-image4.jpg";
import OurValuesImg5 from "assets/images/our-values-image5.jpg";
import { FiArrowRightCircle } from "react-icons/fi";

const OurValues = () => {
  return (
    <>
      <section className="bg-light-orange">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={8} className="mb-5">
              <h2 className="text-center">Our Values</h2>
              <h3 className="text-center">
                Our Values Guide us Through the Journey of Purpose &amp;
                Perseverance
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="our-values">
                <img src={OurValuesImg1} alt="" className="img-fluid" />
                <div className="our-values-content">
                  <h3 className="d-flex align-items-center justify-content-between">
                    Trust & Transparency{" "}
                    <FiArrowRightCircle className="text-orange" />
                  </h3>
                  <p>
                    Our 40 years of trusted legacy have ensured that families
                    spanning across four or more generations have chosen us.
                    We believe that transparency is the key to nurturing
                    strong relationships and ensuring trust.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="our-values">
                <img src={OurValuesImg2} alt="" className="img-fluid" />
                <div className="our-values-content">
                  <h3 className="d-flex align-items-center justify-content-between">
                    Our People, Our Family{" "}
                    <FiArrowRightCircle className="text-orange" />
                  </h3>
                  <p>
                    Transparent and perpetual services have enabled us to
                    create bonds that have strengthened over time. At A.G.
                    Diagnostics, we serve people as a family and take pride in
                    having a workspace that treats everyone as a member of
                    their own.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="our-values">
                <img src={OurValuesImg3} alt="" className="img-fluid" />
                <div className="our-values-content">
                  <h3 className="d-flex align-items-center justify-content-between">
                    Learning & Innovation{" "}
                    <FiArrowRightCircle className="text-orange" />
                  </h3>
                  <p>
                    Learning and innovation is the key to success. Pathology
                    is a science that is constantly growing and we ensure that
                    we remain at the top of the game by being up-to-date.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="our-values">
                <img src={OurValuesImg4} alt="" className="img-fluid" />
                <div className="our-values-content">
                  <h3 className="d-flex align-items-center justify-content-between">
                    Customer Comes First{" "}
                    <FiArrowRightCircle className="text-orange" />
                  </h3>
                  <p>
                    We deeply value those who choose us and therefore our aim
                    is to always put our customers first. Our services have
                    been founded on this very value.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="our-values">
                <img src={OurValuesImg5} alt="" className="img-fluid" />
                <div className="our-values-content">
                  <h3 className="d-flex align-items-center justify-content-between">
                    Excellence Is Our Pride{" "}
                    <FiArrowRightCircle className="text-orange" />
                  </h3>
                  <p>
                    We strive at providing quality work to those who seek our
                    services. Excellence has been and will always be a virtue
                    we imbibe in our team and services. Delivering accurate
                    results in the shortest time possible is our main
                    objective. Ensuring that we get accurate results the first
                    time and every time is our constant aim.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}


export default OurValues;

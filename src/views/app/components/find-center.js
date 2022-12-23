import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import findCenterImage from "assets/images/find-center.jpg";
import mapImage from "assets/images/map.png";
import { Link } from "react-router-dom";


const findCenter = () => {
  return (
    <section className="find-center p-0">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={4} className="findnearest">
            <h3 className="text-white text-start pad-top-30">
              Find the Nearest{" "}
              <span className="text-uppercase">Diagnostics Centre</span>
            </h3>
            <p className="pad-bot-10 pad-top-10">
              We are focused on uniting borders across geographies to make
              better diagnosis a reality
            </p>
            <Link to="/find-a-lab" className="orange-btn hover-white">
              Locate Your Collection Centre
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <img
              src={mapImage}
              alt=""
              className="mar-top-30 mar-bot-30 img-fluid"
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <img
              src={findCenterImage}
              alt=""
              className="mar-top-30 img-fluid mb-3 d-sm-block d-block d-md-block d-lg-none w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default findCenter;

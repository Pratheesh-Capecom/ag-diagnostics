import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import award from "assets/images/award.png";
import destination from "assets/images/destination.png";
import microscope from "assets/images/microscope.png";
import nabl from "assets/images/nabl.png";
import scooter from "assets/images/scooter.png";


const HomeWhyUs = () => {
  return (
    <section className="why-us">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Reasons to Choose AG as</h2>
            <h1 className="text-center title">Your Preferred Healthcare Partner</h1>
            <ul>
              <li>
                <div className="why-choose-icons">
                  <img src={destination} alt="" className="img-fluid" />
                </div>
                <div className="why-choose-text">
                  <div className="inner-box">
                    <p>4 Decades of Trusted Legacy by Dr Ajit Golwilkar</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="why-choose-icons">
                  <img src={microscope} alt="" className="img-fluid" />
                </div>
                <div className="why-choose-text">
                  <div className="inner-box">
                    <p>
                      State-of-Art Pathology Laboratory & Diagnostic Centre on
                      a 16000 sq. ft area
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="why-choose-icons">
                  <img src={award} alt="" className="img-fluid" />
                </div>
                <div className="why-choose-text">
                  <div className="inner-box">
                    <p>55+ Collection Centres Across Pune</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="why-choose-icons">
                  <img src={scooter} alt="" className="img-fluid" />
                </div>
                <div className="why-choose-text">
                  <div className="inner-box">
                    <p>Home Sample Collection Services at your doorstep</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="why-choose-icons">
                  <img src={nabl} alt="" className="img-fluid" />
                </div>
                <div className="why-choose-text">
                  <div className="inner-box">
                    <p>NABL Accredited as per ISO-15189:2022</p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default HomeWhyUs;

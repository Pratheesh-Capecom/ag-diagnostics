import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "assets/images/logo.png";
import BloodTestIcon from "assets/images/blood-test-icon.png";
import CovidIcon from "assets/images/covid-icon.png";
import * as Icon from "react-bootstrap-icons";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.css";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


class Footer extends Component {
  render() {
    var cityName = localStorage.getItem("city_name");
    return (
      <>
        <footer>
          <Container>
            <Row className="justify-content-between">
              <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                <img src={logo} alt="logo" className="img-fluid mb-3" />
                <p>
                  <small>
                    Since 1978, the journey of A.G Diagnostics as a diagnostic
                    company has been inspiring and incredible. The four-decade
                    legacy organization is changing lives with its dedicated and
                    timely services.
                  </small>
                </p>
                <p>
                  <small>
                    In case of any queries or help, contact our team at
                  </small>
                </p>
                <p className="icons">
                  <Icon.GeoAlt />
                  Nayantara, Bhandarkar Road, Pune 411004
                </p>
                <p className="icons">
                  <Icon.Telephone />
                  <Link
                      rel="noopener noreferrer"
                      onClick={() => openInNewTab("tel:02067636763")}
                    >020 6763 6763</Link>
                </p>
                <p className="icons">
                  <Icon.Envelope />
                  <Link
                    onClick={() =>
                      openInNewTab("mailto:info@agdiagnostics.com")
                    }
                    className="text-white"
                  >
                    info@agdiagnostics.com
                  </Link>
                </p>
                <ul className="footer-socials">
                  <li>
                    <Link
                      onClick={() =>
                        openInNewTab("https://www.facebook.com/BeSureBeWell")
                      }
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        openInNewTab("https://www.instagram.com/agdiagnostics/")
                      }
                    >
                      <Icon.Instagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        openInNewTab(
                          "https://www.linkedin.com/company/a-g-diagnostics-pvt-ltd-pune/"
                        )
                      }
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={6} lg={2} xl={2}>
                <h5>Quick Links</h5>
                <div className="footer-column">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us/ag-diagnostics">About Us</Link>
                    </li>
                    <li>
                      <Link to="/about-us/our-team">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/technical-capabilities">
                        Technical Capabilities
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="/blogs/">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={2} xl={2}>
                <h5>Patients</h5>
                <div className="footer-column">
                  <ul>
                    <li>
                      <Link to={`/${cityName.toLowerCase()}/packages`}>Packages</Link>
                    </li>
                    <li>
                      <Link to="/home-visit">Book Home Visit</Link>
                    </li>
                    <li>
                      <Link to="/find-a-lab">Find A Lab</Link>
                    </li>
                    <li>
                      <Link to="/covid-pcr">COVID-19 PCR</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                <h5>Corporate Literature & Brochure</h5>
                <div className="footer-column">
                  <ul>
                    <li>
                      <Link to="/brochures">Package Booklets</Link>
                    </li>
                    <li>
                      <Link to="/brochures">Technical Leaflets</Link>
                    </li>
                    <li>
                      <Link to="/about-us/csr-policy">CSR Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="footer-call-no">
            <p>
              For Home Collection, call us at
              <br />
              <b><Link
                      rel="noopener noreferrer"
                      onClick={() => openInNewTab("tel:02067636763")}
                    >020 6763 6763</Link></b>
            </p>
          </div>
        </footer>
        <section className="footer-bottom p-0">
          <Container>
            <Row>
              <Col className="footer-copyright pb-3">
                <div className="text-white footer-bottom-text text-center">
                  Copyright &copy; {getCurrentYear()}. A.G Diagnostics Pvt. Ltd.
                  | All Rights Reserved.
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <ul className="right-fixed">
          <li>
            <Link to={`/${cityName.toLowerCase()}/packages`}>
              <BiTestTube />
              <span>Packages</span>
            </Link>
          </li>
          <li>
            <Link to="/home-visit">
              <img src={BloodTestIcon} alt="" />
              <span>Book Home Visit</span>
            </Link>
          </li>
          <li>
            <Link to="/covid-pcr">
              <img src={CovidIcon} alt="" />
              <span>Covid 19 PCR</span>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Footer;

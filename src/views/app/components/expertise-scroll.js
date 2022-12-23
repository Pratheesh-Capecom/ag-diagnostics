import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import expertiseImage1 from "assets/images/expertice1.png";
import expertiseImage2 from "assets/images/expertice2.png";
import expertiseImage3 from "assets/images/expertice3.png";
import expertiseImage4 from "assets/images/expertice4.png";
import expertiseImage5 from "assets/images/expertice5.png";
import expertiseImage6 from "assets/images/expertice6.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

class expertiseScroll extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <section className="gray-bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Our Expertise</h2>
              <h3 className="text-center">Our State-of-Art Facilities</h3>
              <Slider {...settings} className="package-slides expertise">
                <div>
                  <div className="expertise-txt">
                    <div className="expertise_inner">
                      <img src={expertiseImage2} alt="" />
                      <div className="exper-txt">
                        <h3>Microbiology</h3>
                        <p>
                          In Microbiology, excellent quality controls ensure the
                          best quality...
                        </p>
                        <Link
                          to="/technical-capabilities/"
                          className="mr-2 readmore"
                        >
                          Read More <BsArrowRight className="text-orange" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="expertise-txt">
                    <div className="expertise_inner">
                      <img src={expertiseImage1} alt="" />
                      <div className="exper-txt">
                        <h3>Hematology</h3>
                        <p>
                          Our hematology & special hematology section offers
                          state-of-the-art testing...
                        </p>
                        <Link
                          to="/technical-capabilities/"
                          className="mr-2 readmore"
                        >
                          Read More <BsArrowRight className="text-orange" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="expertise-txt">
                    <div className="expertise_inner">
                      <img src={expertiseImage3} alt="" />
                      <div className="exper-txt">
                        <h3>Clinical Pathology</h3>
                        <p>
                          Clinical Pathology includes examination of urine,
                          stool, semen, body fluids etc..
                        </p>
                        <Link
                          to="/technical-capabilities/"
                          className="mr-2 readmore"
                        >
                          Read More <BsArrowRight className="text-orange" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="expertise-txt">
                    <div className="expertise_inner">
                      <img src={expertiseImage5} alt="" />
                      <div className="exper-txt">
                        <h3>Quality Assurance</h3>
                        <p>
                          A.G Diagnostics Pvt. Ltd. is committed to getting
                          every test right the first time,...
                        </p>
                        <Link
                          to="/technical-capabilities/"
                          className="mr-2 readmore"
                        >
                          Read More <BsArrowRight className="text-orange" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="expertise-txt">
                    <div className="expertise_inner">
                      <img src={expertiseImage6} alt="" />
                      <div className="exper-txt">
                        <h3>Histo & Cytopathology</h3>
                        <p>
                          A.G Diagnostics has a team of histopathologists with
                          over 40 years...
                        </p>
                        <Link
                          to="/technical-capabilities/"
                          className="mr-2 readmore"
                        >
                          Read More <BsArrowRight className="text-orange" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="expertise-txt">
                    <div className="expertise_inner">
                      <img src={expertiseImage4} alt="" />
                      <div className="exper-txt">
                        <h3>Clinical Biochemistry</h3>
                        <p>
                          Clinical Biochemistry department can be considered as
                          the care department...
                        </p>
                        <Link
                          to="/technical-capabilities/"
                          className="mr-2 readmore"
                        >
                          Read More <BsArrowRight className="text-orange" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <p className="text-center">
                <Link to="/technical-capabilities" className="purple-btn">
                  View all the Technical Capabilities
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default expertiseScroll;

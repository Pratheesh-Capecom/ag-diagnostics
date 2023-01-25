import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import DummyUser from "assets/images/dummy-user.jpg";
import testimonialQuote from "assets/images/testimonial-quote.png";
import { useTestimonial } from "hooks/home";
import Loader from "./loader";


const Testimonials = () => {


  const { data: testimonialData, isLoading: loading } = useTestimonial();
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    if (testimonialData) {
      setTestData(testimonialData?.testimonial)
    }
  }, [testimonialData]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
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

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <section className="bg-light-orange">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Testimonials</h2>
            <h3 className="text-center">What Our Customers Say</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={12}>
            {loading ? <div className="common-loading"><Loader /></div> : testData === undefined || testData === null || testData?.length === 0 ? (
              <div className="common-loading">
                <h3 className="no-data">No Data Found</h3>
              </div>
            ) : (
              <Slider {...settings} className="package-slides testimonials">
                {testData?.map((common, a) => (
                  <div key={a}>
                    <div className="testimonials-list">
                      <p>
                        {common?.description}
                      </p>
                      <div className="user-details">
                        {common?.photo ? <img src={common?.photo} alt="" className="img-round" /> : <img src={DummyUser} alt="" className="img-round" />}
                        <span className="quotes-icon">
                          <img src={testimonialQuote} alt="" />
                        </span>
                        <h3>{common?.given_by}​</h3>
                      </div>
                    </div>
                  </div>
                ))
                }
              </Slider>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import packageIcon1 from "assets/images/packages/icon1.png";
import flask from "assets/images/flask.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { usePackages } from "hooks/homeHooks";

const Packagesscroll = (props) => {

  const { defaultCity } = props;

  const [packageData, setPackageData] = useState(null);
  const { mutate: packages, isLoading: loading } = usePackages();


  const onFetchPackages = (searchParams) => {
    const nformData = JSON.stringify(searchParams);
    packages(nformData, {
      onSuccess: (data) => {
        setPackageData(data?.packages)
      }
    });
  }

  useEffect(() => {
    if (defaultCity) {
      const params = {
        "cityId": defaultCity,
        "package_name": null,
      }
      onFetchPackages(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCity]);


  const settings = {
    dots: false,
    infinite: false,
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

  return (
    <section className="bg-light-orange">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Our Packages</h2>
            <h3 className="text-center">Preventive Health Packages</h3>
            <Slider {...settings} className={packageData === undefined || packageData === null || packageData?.length === 0 ? 'package-slides empty-packages' : 'package-slides'}>
              {loading ? <h1>Loading.....</h1> : packageData === undefined || packageData === null || packageData?.length === 0 ? (
                <div className="d-flex">
                  <h3 className="no-data">No Data Found</h3>
                </div>
              ) : packageData?.map((common, a) => (
                <div key={a}>
                  <div className="package-slide">
                    <div className="icon-img">
                      <img src={packageIcon1} alt="" />
                    </div>
                    <h3>{common?.packageName}</h3>
                    <div className="inc-test">
                      <img src={flask} alt="" /> Includes 8 tests
                    </div>
                    <p>
                      {common?.testLists}
                    </p>
                    <div className="pckge_price">
                      <span>₹{common?.discountFees}/-</span> ₹{common?.fees}/-
                      <Link to="/package-details" className="viewbtn">
                        <BsArrowRightShort className="text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              }
            </Slider>
            <p className="text-center">
              <Link to="/packages" className="purple-btn">
                View All Packages
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Packagesscroll;

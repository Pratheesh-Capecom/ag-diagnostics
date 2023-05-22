import React, { useState, useEffect } from "react";
import HomeVisitBanner from "views/app/components/home-visit-banner";
import HomeVisitContent from "views/app/components/home-visit-content";
import HomeVisitForm from "views/app/components/home-visit-form";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MetaTags from "react-meta-tags";

const HomeVisit = () => {
  const { packagename } = useParams();
  const { data: city } = useCity();
  const [cityData, setCityData] = useState([]);
  const [defaultCity, setDefaultCity] = useState(
    localStorage.getItem("city_id") || "490"
  ); //Default pune
  const [cityModal, setCityModal] = useState(false);

  const modalHandler = (status) => {
    setCityModal(status);
  };

  const cityChangeHandler = (values) => {
    setDefaultCity(values?.cityId);
    modalHandler(false);
    localStorage.setItem("city_id", values?.cityId);
  };

  useEffect(() => {
    if (defaultCity) {
      setDefaultCity(defaultCity);
    }
  }, [defaultCity]);

  useEffect(() => {
    if (city) {
      setCityData(city?.city);
    }
  }, [city]);

  return (
    <>
      <MetaTags>
        <title>Home Visit For Blood Test in Pune - A G Diagnostics</title>
        <meta
          name="description"
          content="A G Diagnostics offers blood test home collection in pune for your comfort and gets reports within 24 hours trusted by Doctors and Hospitals. Book a Blood test online."
        />
      </MetaTags>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
        hide={packagename}
      />
      <HomeVisitBanner />
      <Row className="flex-column-reverse flex-md-row">
        <Col xs={12} sm={12} md={12} lg={12}>
          <HomeVisitContent />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <HomeVisitForm defaultCity={defaultCity} />
        </Col>
      </Row>
    </>
  );
};

export default HomeVisit;

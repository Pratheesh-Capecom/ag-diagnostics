import React, { useState, useEffect } from "react";
import BrochuresBanner from "views/app/components/brochure-banner";
import BrochureContent from "views/app/components/brochure-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import MetaTags from 'react-meta-tags';

const Brochures = () => {

  const { data: city } = useCity();
  const [cityData, setCityData] = useState([]);
  const [defaultCity, setDefaultCity] = useState(localStorage.getItem("city_id") || "490"); //Default pune
  const [cityModal, setCityModal] = useState(false);

  const modalHandler = (status) => {
    setCityModal(status)
  }

  const cityChangeHandler = (values) => {
    setDefaultCity(values?.cityId)
    modalHandler(false)
    localStorage.setItem("city_id", values?.cityId)
  }

  useEffect(() => {
    if (defaultCity) {
      setDefaultCity(defaultCity)
    }
  }, [defaultCity]);

  useEffect(() => {
    if (city) {
      setCityData(city?.city)
    }
  }, [city]);

  return (
    <>
      <MetaTags>
            <title>Download Brochures - A G Diagnostics</title>
            <meta name="description" content="Download our package booklets and technical leaflets for comprehensive details on diagnostic and pathology lab tests. Get informed today." />
            <link rel="canonical" href="https://www.agdiagnostics.com/brochures" />
      </MetaTags>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
      />
      <BrochuresBanner />
      <BrochureContent />
    </>
  );
}


export default Brochures;

import React, { useState, useEffect } from "react";
import TechnicalCapabilitiesBanner from "views/app/components/technical-capabilities-banner";
import TechnicalCapabilitiesContent from "views/app/components/technical-capabilities-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import MetaTags from 'react-meta-tags';


const TechnicalCapabilities = () => {

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
          <title>Technical Capabilities - A G Diagnostics </title>
          <meta name="description" content="A G Diagnostics offers cutting-edge technology in Microbiology & Molecular Biology, Hematology, Clinical Pathology, Quality Assurance, and more." />
      </MetaTags>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
      />
      <TechnicalCapabilitiesBanner />
      <TechnicalCapabilitiesContent />
    </>
  );
}

export default TechnicalCapabilities;

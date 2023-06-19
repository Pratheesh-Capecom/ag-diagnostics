import React, { useState, useEffect } from "react";
import CovidPcrBanner from "views/app/components/covid-pcr-banner";
import CovidPcrContent from "views/app/components/covid-pcr-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import MetaTags from 'react-meta-tags';

const CovidPcr = () => {

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
        <title>Covid 19 RT PCR, Monitoring, Antibody Test in Pune - A G Diagnostics</title>
        <meta name="description" content="A G Diagnostics offers Covid 19 RT-PCR Test, Covid 19 Monitoring tests, SARS-Cov-2 IgG Antibody Test, and Anti-SARS-CoV-2 Spike Protein (S1/S2) IgG Test." />
        <link rel="canonical" href="https://www.agdiagnostics.com/covid-pcr" />
      </MetaTags>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
      />
      <CovidPcrBanner />
      <CovidPcrContent defaultCity={defaultCity} />
    </>
  );
}

export default CovidPcr;

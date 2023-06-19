import React, { useState, useEffect } from "react";
import MediaBanner from "views/app/components/media-banner";
import MediaContent from "views/app/components/media-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import MetaTags from 'react-meta-tags';

const Media = () => {

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
        <title>Media Coverage | A G Diagnostics</title>
        <meta name="description" content="A G Diagnostics, the most reputed lab in Pune and Ahmednagar with extensive media coverage in publications, press, and news articles." />
        <link rel="canonical" href="https://www.agdiagnostics.com/media" />
      </MetaTags>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
      />
      <MediaBanner />
      <MediaContent />
    </>
  );
}

export default Media;

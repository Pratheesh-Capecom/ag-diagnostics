import React, { useState, useEffect } from "react";
import ServicesBanner from "views/app/components/services-banner";
import ServicesContent from "views/app/components/services-content";
import { useCity } from "hooks/home";
import Menubar from "layouts/utility/menu-bar/Menu-bar";

const Services = () => {

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
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler} />
      <ServicesBanner />
      <ServicesContent defaultCity={defaultCity} />
    </>
  );
}

export default Services;

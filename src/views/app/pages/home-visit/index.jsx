import React, { useState, useEffect } from "react";
import HomeVisitBanner from "views/app/components/home-visit-banner";
import HomeVisitContent from "views/app/components/home-visit-content";
import HomeVisitForm from "views/app/components/home-visit-form";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import { useParams } from "react-router-dom";

const HomeVisit = () => {
  const { id } = useParams();
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
        modalHandler={modalHandler}
        hide={id}
      />
      <HomeVisitBanner />
      <HomeVisitContent />
      <HomeVisitForm defaultCity={defaultCity} />
    </>
  );
}

export default HomeVisit;

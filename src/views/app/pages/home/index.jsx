import React, { useState, useEffect } from "react";
import HomeSlider from "views/app/components/homeslider";
import HomeWhyUs from "views/app/components/home-why-us";
import PackagesScroll from "views/app/components/packages-scroll";
import SimpleSteps from "views/app/components/simple-steps";
import PcrCollection from "views/app/components/pcr-collection";
import HomeWhoWeAre from "views/app/components/home-who-we-are";
import ExpertiseScroll from "views/app/components/expertise-scroll";
import FindCenter from "views/app/components/find-center";
import Testimonials from "views/app/components/home-testimonials";
import { useCity } from "hooks/home";
import Menubar from "layouts/utility/menu-bar/Menu-bar";


export default function Home() {

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

  useEffect(() => {
    localStorage.removeItem("apply_id")
  }, []);

  return (
    <>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler} />
      <HomeSlider />
      <HomeWhyUs />
      <PackagesScroll defaultCity={defaultCity} />
      <SimpleSteps />
      <PcrCollection />
      <HomeWhoWeAre />
      <ExpertiseScroll />
      <FindCenter />
      <Testimonials />
    </>
  );
}

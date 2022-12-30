import React, { useState, useEffect } from "react";
import PackagesScroll from "views/app/components/packages-scroll";
import InnerBanner from "views/app/components/inner-banner";
import PackageDetailsContent from "views/app/components/package-details-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";

const PackageDetails = () => {

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

  var url_string = window.location.href;
  var url = new URL(url_string);
  var hide = url.searchParams.get("hide");

  return (
    <>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
        hide={hide}
      />
      <InnerBanner />
      <PackageDetailsContent />
      <PackagesScroll defaultCity={defaultCity} />
    </>
  );
}


export default PackageDetails;

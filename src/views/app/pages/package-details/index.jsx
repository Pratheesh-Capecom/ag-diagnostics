import React, { useState, useEffect } from "react";
import PackagesScroll from "views/app/components/packages-scroll";
import InnerBanner from "views/app/components/inner-banner";
import PackageDetailsContent from "views/app/components/package-details-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import { Helmet } from "react-helmet";

const PackageDetails = () => {
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
      <Helmet>
        <title>
          Health Checkup Packages | Full Body Checkup In Pune - A G Diagnostics
        </title>
        <meta
          name="description"
          content="A G Diagnostics offers comprehensive preventive health checkup in Pune for preventive care. Choose from a variety of Full body check-up options today"
        />
      </Helmet>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
        hide={"hide"}
      />
      <InnerBanner />
      <PackageDetailsContent />
      <PackagesScroll defaultCity={defaultCity} />
    </>
  );
};

export default PackageDetails;

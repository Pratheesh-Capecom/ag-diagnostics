import React, { useState, useEffect } from "react";
import PackagesBanner from "views/app/components/packages-banner";
import PackgesContent from "views/app/components/packages-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';


const Packages = () => {
  const history = useHistory();
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
    setTimeout(() => {
      history.push(
        `/${localStorage.getItem("city_name").toLowerCase()}/packages`
      );
    }, 1000);
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
        <link
          rel="canonical"
          href="https://www.agdiagnostics.com/pune/packages"
        />
      </Helmet>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
      />
      <PackagesBanner />
      <PackgesContent defaultCity={defaultCity} />
    </>
  );
};

export default Packages;

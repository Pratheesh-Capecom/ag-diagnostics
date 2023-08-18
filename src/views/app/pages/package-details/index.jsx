import React, { useState, useEffect } from "react";
import PackagesScroll from "views/app/components/packages-scroll";
import InnerBanner from "views/app/components/inner-banner";
import PackageDetailsContent from "views/app/components/package-details-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Loader from "views/app/components/loader";

const PackageDetails = () => {
  const { packageName } = useParams();
  const { data: city } = useCity();
  const [cityData, setCityData] = useState([]);
  const [packageData, setPackageData] = useState(null);
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

  useEffect(() => {
    axios.get(`https://admin.agdiagnostics.com/api/package-detail/${packageName}`).then(response => {
      setPackageData(response.data?.package_detail)
    })
  }, [packageName])
  return (
    <>
      <Menubar
        defaultCity={defaultCity}
        cityData={cityData}
        cityChangeHandler={cityChangeHandler}
        cityModal={cityModal}
        modalHandler={modalHandler}
        hide={"hide"}
      />
      <InnerBanner />
      {packageData === null ? <center><Loader /></center> : <PackageDetailsContent packageData={packageData} />}
      <PackagesScroll defaultCity={defaultCity} />
    </>
  ); 
};

export default PackageDetails;

import { useState, useEffect } from "react";
import { useCity } from "hooks/home";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Helmet } from "react-helmet";

import axios from "axios";
import Loader from "views/app/components/loader";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import InnerBanner from "views/app/components/inner-banner";
import PackagesScroll from "views/app/components/packages-scroll";
import PackageDetailsContent from "views/app/components/package-details-content";

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
  console.log(packageData, "packageData");
  useEffect(() => {
    axios
      .get(
        `https://admin.agdiagnostics.com/api/package-detail/${packageName}?city_id=${defaultCity}`
      )
      .then((response) => {
        setPackageData(response.data?.package_detail);
      });
  }, [packageName]);
  return (
    <div>
      <Helmet>
        {/* <meta
          name="description"
          content={packageData?.meta_description ?? packageData?.slug}
        /> */}
        <link rel="canonical" href={window.location.href} />
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
      {packageData === null ? (
        <center>
          <Loader />
        </center>
      ) : (
        <PackageDetailsContent packageData={packageData} />
      )}
      <PackagesScroll defaultCity={defaultCity} />
    </div>
  );
};

export default PackageDetails;

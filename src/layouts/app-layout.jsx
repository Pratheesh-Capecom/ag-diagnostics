import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AppViews from "views/app";
import Header from "layouts/utility/header/Header";
import Footer from "layouts/utility/footer/Footer";
import Menubar from "./utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";

export const AppLayout = () => {

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
    <div className="ag-app">
      <Header />
      {window.location.pathname === "/packages" ? null :
        <Menubar
          defaultCity={defaultCity}
          cityData={cityData}
          cityChangeHandler={cityChangeHandler}
          cityModal={cityModal}
          modalHandler={modalHandler} />}
      <Switch>
        <Route path="" component={AppViews} />
      </Switch>
      <Footer />
    </div>
  );
};

export default AppLayout;

import React, { useState, useEffect } from "react";
import CsrBanner from "views/app/components/csr-policy-banner";
import CsrContent from "views/app/components/csr-policy-content";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import MetaTags from 'react-meta-tags';

const CsrPolicy = () => {

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
                <title>Corporate Social Responsibility (CSR) - A G Diagnostics</title>
                <meta name="description" content="A G Diagnostics Private Limited is committed to conducting sustainable and ethical business practices through its Corporate Social Responsibility (CSR) activities." />
                <link rel="canonical" href="https://www.agdiagnostics.com/about-us/csr-policy" />
            </MetaTags>
            <Menubar
                defaultCity={defaultCity}
                cityData={cityData}
                cityChangeHandler={cityChangeHandler}
                cityModal={cityModal}
                modalHandler={modalHandler}
            />
            <CsrBanner />
            <CsrContent />
        </>
    );
}

export default CsrPolicy;

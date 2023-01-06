import React, { useState, useEffect } from "react";
import FounderBanner from "views/app/components/founder-banner";
import FounderContent from "views/app/components/founder-content";
import ExpertiseScroll from "views/app/components/expertise-scroll";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";

const AboutFounder = () => {

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
            />
            <FounderBanner />
            <FounderContent />
            <ExpertiseScroll />
        </>
    );
}


export default AboutFounder;

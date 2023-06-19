import React, { useState, useEffect } from "react";
import FounderBanner from "views/app/components/founder-banner";
import FounderContent from "views/app/components/founder-content";
import ExpertiseScroll from "views/app/components/expertise-scroll";
import Menubar from "layouts/utility/menu-bar/Menu-bar";
import { useCity } from "hooks/home";
import MetaTags from 'react-meta-tags';

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
            <MetaTags>
                <title>About A.G Diagnostics Centre Founder Dr Ajit Golwilkar</title>
                <meta name="description" content="A G Diagnostics, formerly known as Golwilkar Laboratories, provides world-class pathology services in Pune. Founded in 1978 by Dr Ajit Golwilkar" />
                <link rel="canonical" href="https://www.agdiagnostics.com/about-us/about-founder" />
            </MetaTags>
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

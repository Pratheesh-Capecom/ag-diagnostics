import React from "react";
import AboutUsBanner from "views/app/components/about-us-banner";
import AboutContent from "views/app/components/about-content";
import HomeWhyUs from "views/app/components/home-why-us";
import OurValues from "views/app/components/our-values";


const AboutUs = () => {
    return (
        <>
            <AboutUsBanner />
            <AboutContent />
            <HomeWhyUs />
            <OurValues />
        </>
    );
}
export default AboutUs;

import React, { Component } from "react";
import AboutUsBanner from "../components/about-us-banner";
import AboutContent from "../components/about-content";
import HomeWhyUs from "../components/home-why-us";
import OurValues from "../components/our-values";

class AboutUs extends Component {
    render() {
        return (
            <>
                <AboutUsBanner />
                <AboutContent />
                <HomeWhyUs />
                <OurValues />
            </>
        );
    }
}

export default AboutUs;
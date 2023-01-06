import React from "react";
import HomeSlider from "../components/homeslider";
import HomeWhyUs from "../components/home-why-us";
import PackagesScroll from "../components/packages-scroll";
import SimpleSteps from "../components/simple-steps";
import PcrCollection from "../components/pcr-collection";
import HomeWhoWeAre from "../components/home-who-we-are";
import ExpertiseScroll from "../components/expertise-scroll";
import FindCenter from "../components/find-center";
import Testimonials from "../components/home-testimonials";

export default function home() {
  return (
        <>
          <HomeSlider />
          <HomeWhyUs />
          <PackagesScroll />
          <SimpleSteps />
          <PcrCollection />
          <HomeWhoWeAre />
          <ExpertiseScroll />
          <FindCenter />
          <Testimonials />
        </>
  )
}

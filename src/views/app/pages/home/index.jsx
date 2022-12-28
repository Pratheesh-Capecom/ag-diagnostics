import React, { useEffect } from "react";
import HomeSlider from "views/app/components/homeslider";
import HomeWhyUs from "views/app/components/home-why-us";
import PackagesScroll from "views/app/components/packages-scroll";
import SimpleSteps from "views/app/components/simple-steps";
import PcrCollection from "views/app/components/pcr-collection";
import HomeWhoWeAre from "views/app/components/home-who-we-are";
import ExpertiseScroll from "views/app/components/expertise-scroll";
import FindCenter from "views/app/components/find-center";
import Testimonials from "views/app/components/home-testimonials";

export default function Home() {

  useEffect(() => {
    localStorage.removeItem("apply_id")
  }, []);

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
  );
}

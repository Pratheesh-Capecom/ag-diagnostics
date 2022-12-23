import React from "react";
import HomeVisitBanner from "views/app/components/home-visit-banner";
import HomeVisitContent from "views/app/components/home-visit-content";
import HomeVisitForm from "views/app/components/home-visit-form";

const HomeVisit = () => {
  return (
    <>
      <HomeVisitBanner />
      <HomeVisitContent />
      <HomeVisitForm />
    </>
  );
}

export default HomeVisit;

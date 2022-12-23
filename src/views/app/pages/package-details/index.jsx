import React from "react";
import PackagesScroll from "views/app/components/packages-scroll";
import InnerBanner from "views/app/components/inner-banner";
import PackageDetailsContent from "views/app/components/package-details-content";


const PackageDetails = () => {
  return (
    <>
      <InnerBanner />
      <PackageDetailsContent />
      <PackagesScroll />
    </>
  );
}


export default PackageDetails;

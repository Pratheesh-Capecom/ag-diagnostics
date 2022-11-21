import React, { Component } from "react";
import PackagesScroll from "../components/packages-scroll";
import InnerBanner from "../components/inner-banner";
import PackageDetailsContent from "../components/package-details-content";

class PackageDetails extends Component {
    render() {
        return (
            <>
                <InnerBanner />
                <PackageDetailsContent />                
                <PackagesScroll />
            </>
        );
    }
}

export default PackageDetails;
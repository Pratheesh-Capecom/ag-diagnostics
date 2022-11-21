import React, { Component } from "react";
import PackagesBanner from "../components/packages-banner";
import PackgesContent from "../components/packages-content";

class Packages extends Component {
    render() {
        return (
            <>
                <PackagesBanner />
                <PackgesContent />
            </>
        );
    }
}

export default Packages;
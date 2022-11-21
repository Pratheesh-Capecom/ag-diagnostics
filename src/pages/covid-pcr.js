import React, { Component } from "react";
import CovidPcrBanner from "../components/covid-pcr-banner";
import CovidPcrContent from "../components/covid-pcr-content";

class CovidPcr extends Component {
    render() {
        return (
            <>
                <CovidPcrBanner />
                <CovidPcrContent />
            </>
        );
    }
}

export default CovidPcr;
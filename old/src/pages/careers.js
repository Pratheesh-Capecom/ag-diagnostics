import React, { Component } from "react";
import CareersBanner from "../components/careers-banner";
import CareersContent from "../components/careers-content";

class Careers extends Component {
    render() {
        return (
            <>
                <CareersBanner />
                <CareersContent />
            </>
        );
    }
}

export default Careers;
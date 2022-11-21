import React, { Component } from "react";
import SpecialitiesBanner from "../components/specialities-banner";
import SpecialitiesContent from "../components/specialities-content";

class Specialities extends Component {
    render() {
        return (
            <>
                <SpecialitiesBanner />
                <SpecialitiesContent />
            </>
        );
    }
}

export default Specialities;